import React,{Component} from "react"
import "./index.scss"
import NavLeft from "../../components/navLeft/navLeft"
import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"

import {Row,Col} from "antd"
export default class Admin extends Component{
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return(
            <div className="container clearfix">
                <Row>
                    <Col span={3} className="navLeft">
                        <NavLeft/>
                    </Col>
                    <Col span={21} style={{height:"100vh",overflow:"auto"}}>
                        <Header/>
                        <div className="contant-warp">
                            <div className="content">
                                {this.props.children}
                            </div>
                        </div>
                        <Footer/>
                    </Col>
                </Row>
            </div>
        )
    }
}