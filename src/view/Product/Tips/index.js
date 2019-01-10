import React, {Component} from 'react'
import './index.scss'

class Tips extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tipList: this.props.data.data.contents
		}
	}

	render() {
		return (
			<div id="tips">
				<h3 className="card-title">使用提示</h3>
				<ul className="tip-list">
					{
						this.state.tipList.map((item, index) =>
							<li key={index}>{item.text}</li>
						)
					}
				</ul>
				<div className="tips-wrapper">
					<a className="tips-call" href={`tel:${this.props.data.data.restaurant_phone_number[0]}`}>
						<span className="iconfont icon-kefu"/>
						<span>联系客服</span>
					</a>
				</div>
			</div>
		);
	}


}


export default Tips