import React,{Component} from 'react'
import './index.scss'
import Swipe from './Swipe'
import Info from './Info'
import Shop from './Shop'

class Product extends Component{
	render() {
		return (
			<div id="product">
				<Swipe {...this.props}/>
				<Info {...this.props}/>
				<Shop {...this.props}/>
			</div>
		);
	}

}

export default Product


