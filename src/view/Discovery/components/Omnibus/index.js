import React,{Component} from 'react'
import propTypes from 'prop-types'
import {NavLink} from 'react-router-dom'


class Omnibus extends Component{


	static propTypes = {
		favertor:propTypes.array
	}


	render(){
		return (
			<div className='omnibus'>
				<div className="swiper-wrapper">
					<div className="swiper-slide one" key={this.props.favertor.length}>
						
							
							<NavLink to='/discovery/list' replace>
					    		<p className='title'>{this.props.favertor[0].title}</p>
					    		<p className='tags'>{this.props.favertor[0].desc}</p>
							</NavLink>
							
						
					</div>
					<div className="swiper-slide two">
						{
							this.props.favertor.length?
							<div>
					    		<p className='title'>{this.props.favertor[1].title}</p>
					    		<p className='tags'>{this.props.favertor[1].desc}</p>
							</div>
							:null
						}
					</div>
					<div className="swiper-slide three">
						{
							this.props.favertor.length?
							<div>
					    		<p className='title'>{this.props.favertor[2].title}</p>
					    		<p className='tags'>{this.props.favertor[2].desc}</p>
							</div>
							:null
						}
					</div>
				</div>
			</div>
		)
	}
}

export default Omnibus