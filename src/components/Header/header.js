import React, { Component } from "react"
import "./header.scss"
import { Link } from "react-router-dom"

import {formDate} from "../../utils/index.js"
import axios from "axios"


class Header extends Component {
    state = {
        time:"2018-11-09 14:55:20",
        weather:"低温 -2.0℃ ~ 高温 2.0℃ 北风 4-5级"
    }
    getTime(){
        setInterval(()=>{
            let unixDate = new Date().getTime()
            let timeStr = formDate(unixDate)
            this.setState({
                time:timeStr
            })
        },1000)
    }
    getWeather = () =>{
        axios.get(`http://t.weather.sojson.com/api/weather/city/101050112`).then(res => {
            console.log(res)
            let weather = res.data.data.forecast[0]
            console.log(weather)
            let weatherStr = `${weather.low} -- ${weather.high}  ${weather.fx} ${weather.fl}`
            this.setState({
                weather:weatherStr
            })
        })
    }
    componentWillMount(){
        this.getTime()
        this.getWeather()
    }
    render() {
        return (
            <div className="header clearfix">
                <div className="userInfo">
                    <div className="flr">
                        <span>欢迎</span><span className="username">姜盛</span><Link to="/logout" className="logout">退出</Link>
                    </div>
                </div>     
                <div className="weather-warp">
                    <div className="icon fll">首页</div>
                    <div className="weather flr clearfix">
                        <div className="date fll">{this.state.time}</div>
                        <div className="weather-detail flr">{this.state.weather}</div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default Header