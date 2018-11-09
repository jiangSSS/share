import React, { Component } from "react";
import "../order/order.scss"
import axios from "../../axios/index.js"
import { Card, Form, Input, Button, Select, DatePicker, Table, Modal, message } from 'antd'
const FormItem = Form.Item
const Option = Select.Option
const { RangePicker } = DatePicker

class FilterForm extends Component {
	constructor(props){
		super(props)
	}
	orderStatus = [
		{
			label: "全部",
			id: 0
		},
		{
			label: "进行中",
			id: 1
		},
		{
			label: "结束进程",
			id: 2
		}
	]
	cityData = [
		{
			label: "北京",
			id: 0
		},
		{
			label: "上海",
			id: 1
		},
		{
			label: "广州",
			id: 2
		}
	]
	
	//  查询功能获取表单数据
	handleSearch = () =>{
		console.log(this.props.form.getFieldsValue())
		// this.props.form.getFieldsValue()
	}
	// 重置数据
	resetData = () =>{
		this.props.form.resetFields()
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="container">
				<Form layout="inline" className="form">
					<FormItem label="城市">
						{getFieldDecorator('city')(
							<Select placeholder="请选择一个城市" style={{ width: 180 }}>
								{this.cityData.map(item => 
									<Option value={item.id} key={item.id}>{item.label}</Option>)
								}
							</Select>
						)} 
					</FormItem>
					<FormItem label="订单时间">
						{getFieldDecorator('date')(
							<RangePicker />
						)} 
					</FormItem>
					<FormItem label="订单状态">
						{getFieldDecorator('order_status')(
							<Select placeholder="请选择一个状态" style={{ width: 180 }}>
								{this.orderStatus.map(item => 
									<Option value={item.id} key={item.id}>{item.label}</Option>)
								}
							</Select>
					 	)} 
					</FormItem>
				</Form>
				<div className="btn-find">
					<Button type="primary" className="find" onClick={this.handleSearch}>查询</Button>
					<Button onClick={this.resetData}>重置</Button>
				</div>
			</div>
		);
	}
}
const FormHeader = Form.create()(FilterForm)

export default class Order extends Component {
	constructor(props){
		super(props)
	}
	state = {
		dataSource:[],
		pageSize:"",
		total:"",
		isLoading:false,
		endItem: {},
		selectedIndex: []
	}
	componentWillMount(){
		this.getData()
	}
	params = {
		pn:1
	}
	// 获取数据
	getData = () =>{
		this.setState({
			isLoading:true
		})
		axios.get("/order/list",this.params).then(res=>{
			console.log(res)
			if(res.code == 0){
				this.setState({
					dataSource:res.result.item_list.map((item,index)=>{
						item.key = index
						return item
					}),
					pageSize:10,
					total:res.result.total_count,
					isLoading:false
				})
			}
		})
	}
	// 结束订单
	handleDone = () =>{
		let selectedItem = this.state.selectedItem
		if(selectedItem){
			axios.get("/order/ebike_info",{id:selectedItem[0].id}).then(res=>{
				this.setState({
					endItem:res.result,
					isShowModel:true
				})
			})
		}else{
			message.info("请选择一项订单进行操作")
		}
	}
	handleEnd = ()=>{
		let id = this.state.selectedItem[0].id
		this.setState({
			isShowModal:false
		})
		axios.get("/order/finish_order",{id}).then(res=>{
			if(res.code == 0){
				message.success("结束订单成功")
				this.getData()
			}		
		})
	}
	render() {
		const columns = [
            {
                title: '订单编号',
                dataIndex: 'order_sn',
                key: 'order_sn'
            },
            {
                title: '车辆编号',
                dataIndex: 'bike_sn',
                key: 'bike_sn'
            },
            {
                title: '用户名',
                dataIndex: 'user_name',
                key: 'user_name'
            },
            {
                title: '手机号',
                dataIndex: 'mobile',
                key: 'mobile'
            },
            {
                title: '里程',
                dataIndex: 'distance',
                render(distance) {
                    return distance / 1000 + 'Km';
                },
                key: 'distance'
            },
            {
                title: '行驶时长',
                dataIndex: 'total_time',
                key: 'total_time'
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status'
            },
            {
                title: '开始时间',
                dataIndex: 'start_time',
                key: 'start_time'
            },
            {
                title: '结束时间',
                dataIndex: 'end_time',
                key: 'end_time'
            },
            {
                title: '订单金额',
                dataIndex: 'total_fee',
                key: 'total_fee'
            },
            {
                title: '实付金额',
                dataIndex: 'user_pay',
                key: 'user_pay'
            }
		]
		const pagination = {
			total:this.state.total,
			pageSize:this.state.pageSize,
			onChange:(index)=>{
				this.params.pn = index
				this.getData()
			}
		}
		const rowSelection = {
			type:"radio",
			selectedRowKeys:this.state.selectedIndex,
			onChange:(selectedRowKeys,selectedRows)=>{
				this.setState({
					selectedItem:selectedRows,
					selectedIndex:selectedRowKeys
				})
			}	
		}
		return (
			<div className="Header">
				<Card>
					<FormHeader></FormHeader>
				</Card>
				<Card>
					<div className="btn-find">
						<Button type="primary" className="find">订单详情</Button>
						<Button type="primary" onClick={this.handleDone}>结束订单</Button>
					</div>
				</Card>
				<Card>
					<Table 
						rowSelection={rowSelection} 
						columns={columns} 
						dataSource={this.state.dataSource}
						pagination={pagination}
						loading={this.state.isLoading}
					></Table>
				</Card>
				<Modal 
					title="结束订单"
          			visible={this.state.isShowModal}
          			onOk={this.handleEnd}
          			onCancel={()=> this.setState({isShowModal:false})}>
					<ul>
						<li>
							<span>车辆编号</span>
							{this.state.endItem.bike_sn}
						</li>
						<li>
							<span>剩余电量</span>
							{this.state.endItem.battery}
						</li>
						<li>
							<span>行程开始时间</span>
							{this.state.endItem.start_time}
						</li>
						<li>
							<span>当前位置</span>
							{this.state.endItem.location}
						</li>
					</ul>
				</Modal>
			</div>
		);
	}
}