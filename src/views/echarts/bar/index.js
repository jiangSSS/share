import React, { Component } from "react";
// import "../Home/home.css"
import ReactEcharts from "echarts-for-react"
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import {Card} from "antd"
export default class BarDemo extends Component {
	bar1() {
		return {
			color: ['#3398DB'],
			tooltip: {
				trigger: 'axis',
				axisPointer: {            // 坐标轴指示器，坐标轴触发有效
					type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: [
				{
					type: 'category',
					data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
					axisTick: {
						alignWithLabel: true
					}
				}
			],
			yAxis: [
				{
					type: 'value'
				}
			],
			series: [
				{
					name: '当天数据',
					type: 'bar',
					barWidth: '50%',
					data: [1000, 5200, 2000, 3340, 1590, 4330, 3820]
				}
			]
		}
	}
	bar2(){
		return{
			title: {
				text: '世界人口总量',
				subtext: '数据来自网络'
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			legend: {
				data: ['2011年', '2012年']
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: {
				type: 'value',
				boundaryGap: [0, 0.01]
			},
			yAxis: {
				type: 'category',
				data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
			},
			series: [
				{
					name: '2011年',
					type: 'bar',
					data: [18203, 23489, 29034, 104970, 131744, 630230]
				},
				{
					name: '2012年',
					type: 'bar',
					data: [19325, 23438, 31000, 121594, 134141, 681807]
				}
			]
		}
	}
	render() {
		return (
			<div className="container">
				<Card title="条形图1">
					<ReactEcharts
					option={this.bar1()}>
					</ReactEcharts>
				</Card>
				<Card title="条形图2">
				 	<ReactEcharts
					 option={this.bar2()}
					>
					 </ReactEcharts>
				</Card>
			</div>
		);
	}
}