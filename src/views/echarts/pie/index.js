import React, { Component } from "react";
import ReactEcharts from 'echarts-for-react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
// import "../Home/home.css"
import { Card } from "antd"
export default class PieDemo extends Component {
	pie1() {
		return {
			title: {
				text: '用户骑行订单',
				subtext: '表一',
				x: 'center'
			},
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				left: 'left',
				data: ['周一', '周二', '周三', '周四', '周五','周六','周日']
			},
			series: [
				{
					name: '访问来源',
					type: 'pie',
					radius: '55%',
					center: ['50%', '60%'],
					data: [
						{ value: 6835, name: '周一' },
						{ value: 4510, name: '周二' },
						{ value: 534, name: '周三' },
						{ value: 1035, name: '周四' },
						{ value: 1548, name: '周五' },
						{ value: 3548, name: '周六' },
						{ value: 2548, name: '周日' },
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
			]
		}
	};
	pie2(){
		return{
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				x: 'left',
				data:['星期一','星期二','星期三','星期四','星期五','星期六','星期日']
			},
			series: [
				{
					name:'访问来源',
					type:'pie',
					radius: ['50%', '70%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: false,
							position: 'center'
						},
						emphasis: {
							show: true,
							textStyle: {
								fontSize: '30',
								fontWeight: 'bold'
							}
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					data:[
						{value:635, name:'星期一'},
						{value:3510, name:'星期二'},
						{value:934, name:'星期三'},
						{value:1535, name:'星期四'},
						{value:3048, name:'星期五'},
						{value:4548, name:'星期六'},
						{value:2548, name:'星期日'}
					]
				}
			]
		}
	}
	render() {
		return (
			<div className="container">
				<Card title="饼状图1">
					<ReactEcharts 
						// echarts={echarts}
						option={this.pie1()}
						// notMerge={true}
						// lazyUpdate={true}
						// theme={"theme_name"}
						// onChartReady={this.onChartReadyCallback}
						// onEvents={EventsDict}
						// opts={} 
						>
					</ReactEcharts>
				</Card>
				<Card title="饼状图2">
					<ReactEcharts
					option={this.pie2()}
					>
						
					</ReactEcharts>
				</Card>
			</div>
		);
	}
}