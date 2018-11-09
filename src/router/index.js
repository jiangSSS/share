import React,{Component} from "react"
import {HashRouter,Route,Switch} from "react-router-dom"

import Admin from "../views/admin/index"
import Second from "../views/second/index.js"
import Order from "../views/order/index.js"
import NotMatch from "../views/notMatch/index"
import Home from "../views/Home/home"
import BarDemo from "../views/echarts/bar"
import PieDemo from "../views/echarts/pie"

export default class Router extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <Switch>
                        {/* <Route path="/" exact component={Home}></Route> */}
                        <Route path="/admin" render={()=>
                            <Admin>
                                <Switch>
                                    <Route path="/admin/home" component={Home}></Route>
                                    <Route path="/admin/order" component={Order}></Route>
                                    <Route path="/admin/second" component={Second}></Route>
                                    <Route path="/admin/bar" component={BarDemo}></Route>
                                    <Route path="/admin/pie" component={PieDemo}></Route>
                                    <Route component={NotMatch}></Route>             
                                </Switch>     
                                
                            </Admin> 
                        }></Route>
                        <Route component={NotMatch}></Route>                       
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}