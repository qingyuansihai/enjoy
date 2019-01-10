import React, {Component} from 'react'
import './index.scss'

class Shop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shopInfo: this.props.data.data.restaurants
		}
	}

	render() {
		return (
			<div id="shop">
				{
						this.state.shopInfo.map(item =>
							<div key={item}>
								<h3 className="card-title">商户信息</h3>
								<div className="title">{item.restaurant_name}</div>
								<a className="address"
								   href={`https://topic.ricebook.com/topicpage/map.html?p=121.46739196777344,31.215110778808594&t=${item.restaurant_address}`}>
									<i className="iconfont icon-weizhi"/>
									<span className="content">{item.restaurant_address}</span>
									<i className="iconfont icon-left-2"/>
								</a>
								<a className="tel" href={`tel:${item.restaurant_phone_numbers[0]}`}>
									<i className="iconfont icon-dianhua"/>
									<span className="content">{item.restaurant_phone_numbers[0]}</span>
									<i className="iconfont icon-left-2"/>
								</a>
							</div>
						)
				}
			</div>
		);
	}


}


export default Shop