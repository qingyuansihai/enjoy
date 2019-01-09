import React, {Component} from 'react'
import {getProductBasicInfo} from '../model'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import './index.scss'

class Swipe extends Component {
	img_url;
	constructor(props) {
		super(props);
		this.state = {
			swipeList: []
		}
	}

	render() {
		return (
			<div id="swipe">
				<div className="swiper-container">
					<div className="swiper-wrapper">
						{
							this.state.swipeList.map((item,index) =>
								<div className="swiper-slide" key={index}>
									<img src={item.img_url} alt=""/>
								</div>
							)
						}
					</div>
					<div className="swiper-pagination"/>
				</div>
			</div>
		);
	}

	componentDidMount() {
		// console.log(this.props.match.params.id);
		getProductBasicInfo(this.props.match.params.id).then(res => {
			// console.log(res);
			this.setState({
				swipeList: res.product_images
			});
			//初始化轮播
			new Swiper('.swiper-container', {
				pagination: {
					el: '.swiper-pagination',
				},
				autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				},
			});
		})
	}
}


export default Swipe