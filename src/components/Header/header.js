import React, { Component } from "react"
import "./header.scss"
import { Link } from "react-router-dom"

import { Menu, Icon } from "antd"
import { Button } from "antd"
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Header extends Component {
    render() {
        return (
            <div className="nav-left">
                我是头部
                {/* <Button type="promary">我是按钮</Button> */}
            </div>
        )
    }
}

export default Header