import React, { Component } from "react"
import "./footer.scss"
import { Link } from "react-router-dom"

import { Menu, Icon } from "antd"
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                版权所有: --HuaShan--
            </div>
        )
    }
}

export default Footer