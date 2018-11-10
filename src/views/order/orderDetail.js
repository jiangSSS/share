import React,{Component} from "react"
import "./orderDetail.scss"
import {Link} from "react-router-dom"
import {Card} from "antd"
import {Map,Marker,NavigationControl,InfoWindow} from "react-bmap"
import axios from "axios"
export default class OrderDetail extends Component{
    componentDidMount(){
        this.getData()
    }
    getData = ()=>{
        const {id} = this.props.match.params
        axios.get("/order/detail",{id}).then(res=>{
            if(res.code == 0){
                console.log(res)
                this.initMap(res.result)
            }
        })
    }
    initMap = (result)=>{
        const BMap = window.BMap
        this.map = new BMap.Map("Bmap");          // 创建地图实例  
        var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
        this.map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别  
        this.map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        this.addControl()               // 添加控件
        this.drawPolyline(result.position_list)
    }  
    // 添加控件
    addControl = ()=>{
        const BMap = window.BMap
        const map = this.map
        map.addControl(new BMap.NavigationControl({
            anchor: window.BMAP_ANCHOR_TOP_RIGHT
        }));
        map.addControl(new BMap.ScaleControl({
            anchor: window.BMAP_ANCHOR_BOTTOM_RIGHT
        }));
    } 
    // 绘制路径折线图
    drawPolyline = (position_list)=>{
        const BMap = window.BMap
        const map = this.map
        let startPoint = position_list[0]
        let endPoint = position_list[position_list.length-1] 	
        let startBmapPoint
        
    }   
    // 绘制服务区
    drawServiceArea = ()=>{

    }
    render(){
        return(
            <div className="container">
                <div className="header clearfix">
                    <h1 className="fll">共享单车后台操作系统</h1>
                    <div className="user flr">
                        <span>欢迎</span><span className="username">姜盛</span><Link to="/logout" className="logout">退出</Link>
                    </div>
                </div>
                <Card>
                    <div className="Bmap" id="Bmap"></div>
                </Card>
                {/* <Map center={{lng: 116.402544, lat: 39.928216}} zoom="11" className="Bmap">
                    <Marker position={{lng: 116.402544, lat: 39.928216}} />
                    <NavigationControl /> 
                    <InfoWindow position={{lng: 116.402544, lat: 39.928216}} text="内容" title="标题"/>
                </Map> */}
            </div>
        )
    }
}