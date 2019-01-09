import React,{Component} from 'react'
import './index.scss'
import Swipe from './Swipe'
import Info from './Info'
import Shop from './Shop'
import Feedback from './Feedback'
import Menu from './Menu'
import Light from './Light'
import Tips from './Tips'
import Like from './Like'

class Product extends Component{
	render() {
		return (
			<div id="product">
				<Swipe {...this.props}/>
				<Info {...this.props}/>
				<Shop {...this.props}/>
				<Feedback {...this.props}/>
				<Menu {...this.props}/>
				<Light {...this.props}/>
				<Tips {...this.props}/>
				<Like {...this.props}/>
			</div>
		);
	}

}

export default Product


