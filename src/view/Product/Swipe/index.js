import React, {Component} from 'react'
import 'swiper/dist/css/swiper.min.css'
import './index.scss'
import ReactSwipe from 'react-swipe';

class Swipe extends Component {
	img_url;

	constructor(props) {
		super(props);
		this.state = {
			swipeList: this.props.data
		}
	}

	render() {
		return (
			<div id="swipe">
				<ReactSwipe
					key={this.state.swipeList.length}
					className="carousel"
					swipeOptions={{continuous: true, auto: 2000}}
				>
					{
						this.state.swipeList.map((item, index) =>
							<div className="swiper-slide" key={index}>
								<img src={item.img_url} alt=""/>
							</div>
						)
					}
				</ReactSwipe>
			</div>
		);
	}


}


export default Swipe