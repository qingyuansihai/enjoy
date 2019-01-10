import React, {Component} from 'react'
import './index.scss'

class Info extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productInfo: this.props.data,
			tags: this.props.data.display_property_group
		}
	}

	render() {
		return (
			<div id="Info">
				{
					this.state.productInfo ?
						<div className="info">
							<div className="info-title">
								<h3 className="title">
									{this.state.productInfo.name}-{this.state.productInfo.spec}
									<i className="iconfont icon-weidianzhongdeaixin
"/>
								</h3>
								<p className="desc">{this.state.productInfo.description}</p>
								<p className="price">
									{this.state.productInfo.price}元/{this.state.productInfo.show_entity_name}
									<span><del>￥{this.state.productInfo.origin_price}</del> 丨 随时退</span>
								</p>
							</div>
							<div className="tags">
								{
									this.state.tags.map((item, index) =>
										<span key={index} style={{
											background: item.background_color,
											color: item.font_color
										}}>{item.name}</span>
									)
								}

							</div>
						</div>
						: null
				}
			</div>
		);
	}


}

export default Info