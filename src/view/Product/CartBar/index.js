import React, {Component} from 'react'
import './index.scss'

class CartBar extends Component{
	render() {
		return (
			<div id="cartBar">
				<div className="cart">
					<span className="iconfont icon-gouwuche"/>
				</div>
				<a href="">加入购物车</a>
				<a href="">即刻购买</a>
			</div>
		);
	}
}


export default CartBar