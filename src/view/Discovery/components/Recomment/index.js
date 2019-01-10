import React,{Component} from 'react'
import propTypes from 'prop-types'

class Recomment extends Component{
	static propTypes = {
		swiper: propTypes.array
	}
	render(){
		return (
			<div className='recomment'>
				<div className="swiper-container">
				  <div className="swiper-wrapper">

				    {
				    	this.props.swiper.map((item,index)=> 
				    		<a className="swiper-slide" key={index} href={item.enjoy_url}>
				    			<img src={item.url}  alt='' />
				    			<p className='tips'>{item.tag}</p>
				    			<p className='title'>{item.title}</p>
				    			<p className='tags'>{item.desc}</p>
				    		</a>
				    	)
				    }
				  </div>
				</div>
			</div>
		)
	}
}

export default Recomment