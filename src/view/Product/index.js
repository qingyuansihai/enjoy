import React, {Component} from 'react'
import './index.scss'
import {getProductBasicInfo} from "./model"
import {getProductDetailInfo} from "./model";
import Swipe from './Swipe'
import Info from './Info'
import Shop from './Shop'
import Feedback from './Feedback'
import Menu from './Menu'
import Light from './Light'
import Tips from './Tips'
import Like from './Like'

class Product extends Component {

	constructor(props) {
		super(props);
		this.state = {
			basicInfo: null,
			detailInfo: []
		}
	}

	render() {
		return (
			<div id="product">
				{
					this.state.basicInfo && this.state.detailInfo.length !== 0 ?
						<div className="container">
							{
								this.state.basicInfo.product_type === 0 ?
									<div className="product_type1">
										<Swipe {...this.props} data={this.state.basicInfo.product_images}/>
										<Info {...this.props} data={this.state.basicInfo}/>
										<Shop {...this.props} data={this.state.detailInfo[0]}/>
										<Feedback {...this.props} data={this.state.detailInfo[1]}/>
										<Menu {...this.props} data={this.state.detailInfo[2]}/>
										<Light {...this.props} data={this.state.detailInfo[3]}/>
										<Tips {...this.props} data={this.state.detailInfo[4]}/>
										<Like {...this.props} data={this.state.detailInfo[5]}/>
									</div>
									:
									<div className="product_type2">
										<Swipe {...this.props} data={this.state.basicInfo.product_images}/>
										<Info {...this.props} data={this.state.basicInfo}/>
										<Feedback {...this.props} data={this.state.detailInfo[0]}/>
										{/*商品详情*/}

									</div>
							}

						</div>
						: null
				}

			</div>
		);
	}

	componentDidMount() {
		getProductBasicInfo(this.props.match.params.id).then(res => {
			console.log(res);
			this.setState({
				basicInfo: res
			})
		});
		getProductDetailInfo(this.props.match.params.id).then(res => {
			console.log(res);
			this.setState({
				detailInfo: res
			})
		})
	}

}

export default Product


