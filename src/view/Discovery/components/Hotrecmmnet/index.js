import React,{Component} from 'react'
import propTypes from 'prop-types'


class Hotrecmment extends Component {

	render(){
		return (
			<div className='hotlist'>
				<div className="swiper-wrapper">

				  {
				  	this.props.hot.map((item,index)=> 
				  		<a className="swiper-slide" key={index} href={item.enjoy_url}>
				  			<img src={item.url}  alt='' />
				  			<p className='title'>{item.title}</p>
				  		</a>
				  	)
				  }
				</div>

				<div className="swiper-pagination"></div>
			</div>
		)
	}






}

export default Hotrecmment