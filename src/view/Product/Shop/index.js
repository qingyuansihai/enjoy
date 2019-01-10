import React, {Component} from 'react'
import './index.scss'

class Shop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shopInfo: this.props.data.data.restaurants[0]
		}
	}

	render() {
		return (
			<div id="shop">
				{
					this.state.shopInfo ?
						<div>
							<h3 className="card-title">商户信息</h3>
							<div className="title">{this.state.shopInfo.restaurant_name}</div>
							<a className="address"
							   href={`https://topic.ricebook.com/topicpage/map.html?p=121.46739196777344,31.215110778808594&t=${this.state.shopInfo.restaurant_address}`}>
								<i className="iconfont icon-weizhi"/>
								<span className="content">{this.state.shopInfo.restaurant_address}</span>
								<i className="iconfont icon-left-2"/>
							</a>
							<a className="tel" href={`tel:${this.state.shopInfo.restaurant_phone_numbers[0]}`}>
								<i className="iconfont icon-dianhua"/>
								<span className="content">{this.state.shopInfo.restaurant_phone_numbers[0]}</span>
								<i className="iconfont icon-left-2"/>
							</a>
						</div>
						: null
				}
			</div>
		);
	}


}


export default Shop