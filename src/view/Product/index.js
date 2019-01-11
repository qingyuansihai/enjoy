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
import CartBar from './CartBar'

import {connect} from 'react-redux'
import {Toast} from "antd-mobile";

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

					this.state.basicInfo && this.state.detailInfo.length > 4 ?
						<div className="container">
							{
								this.state.basicInfo.product_type === 0 ?
									<div className="product_type0">
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
									<div className="product_type1">
										<Swipe {...this.props} data={this.state.basicInfo.product_images}/>
										<Info {...this.props} data={this.state.basicInfo}/>
										<Feedback {...this.props} data={this.state.detailInfo[0]}/>
										{/*<Detail {...this.props} data={this.state.detailInfo[1]}/>*/}
										{/*<Light {...this.props} data={this.state.detailInfo[2]}/>*/}
									</div>

							}
						</div>
						: null
				}

				<CartBar/>
			</div>
		);
	}


	componentWillUnmount() {
		this.props.showNavBar()

	}

	componentDidMount() {
		Toast.loading('Loading...',1.5, ()=>{}, true);

		this.props.hideNavBar();

		getProductBasicInfo(this.props.match.params.id).then(res => {
			console.log(res);
			this.setState({
				basicInfo: res
			})
		});
		getProductDetailInfo(this.props.match.params.id).then(res => {

			this.setState({
				detailInfo: res
			});
			Toast.success('Load Succeed', 1.5)
		})
	}

}

export default connect(
	null,
	{
		showNavBar(){
			return {
				type:"ShowNavBar",
				payload:true  // payload 可以随便起名字
			}
		},

		hideNavBar(){
			return {
				type:"HideNavBar",
				payload:false  // payload 可以随便起名字
			}
		}
	}
)(Product)


