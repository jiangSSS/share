import React, { Component } from "react"
import "./navLeft.scss"
import { Link } from "react-router-dom"

import { Menu, Icon } from "antd"
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

class NavLeft extends Component {
    // handleClick = ({item,key,keyPath})=>{
    //     const text = item.props.children.props.children
    //     this.props.action.changeMenuItem(text)
    // }   
    render() {
        return (
            <div className="nav-left fll">
                <Menu mode="vertical" theme="dark" >
                {/* onClick={this.handleClick} */}
                    <MenuItem key="/首页" className="item">
                        <Link to="/admin/home"><Icon type="desktop"></Icon>首页</Link>
                    </MenuItem>
                    {/* <MenuItem key="/管理">
                        <Link to="/admin/order"><Icon type="pie-chart"></Icon>管理</Link>
                    </MenuItem> */}
                    <MenuItem key="/控制">
                        <Link to="/admin/second"><Icon type="setting"></Icon>控制</Link>
                    </MenuItem>
                    <SubMenu key="1" title={<span><Icon type="mail" /><span>订单管理</span></span>}>
                        <MenuItem key="/第1页">
                            <Link to="/admin/order"><Icon type="inbox"></Icon>订单管理</Link>
                        </MenuItem>
                        <MenuItem key="/第2页">
                            <Link to="/a1ss"><Icon type="inbox"></Icon>订单管理demo</Link>
                        </MenuItem>       
                    </SubMenu>
                    <SubMenu key="2" title={<span><Icon type="appstore" /><span>图例</span></span>}>
                        <MenuItem key="/第12页">
                            <Link to="/admin/bar"><Icon type="inbox"></Icon>条形图</Link>
                        </MenuItem>
                        <MenuItem key="/第22页">
                            <Link to="/admin/pie"><Icon type="inbox"></Icon>饼图</Link>
                        </MenuItem>       
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

export default NavLeft