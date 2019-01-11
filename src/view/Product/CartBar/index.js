import React, {Component} from 'react'
import './index.scss'
import {Toast} from "antd-mobile";

class CartBar extends Component{
	render() {
		return (
			<div id="cartBar">
				<div className="cart">
					<span className="iconfont icon-gouwuche"/>
				</div>
				<i onClick={this.handleClick.bind(this)}>加入购物车</i>
				<i onClick={this.handleClick.bind(this)}>即刻购买</i>
			</div>
		);
	}

	handleClick() {
		Toast.fail('请登录后进行操作~', 1.5, ()=> {
			this.props.history.push('/center')
		}, true)
	}
}


export default CartBar