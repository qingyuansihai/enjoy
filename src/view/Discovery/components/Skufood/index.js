import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import propTypes from 'prop-types'


class Skufood extends Component {
	static propTypes={
		skufood:propTypes.array
	}
	render(){
		return (
			<div className='sku-shelf'>
				<div className='toptitle'>
					<h3>{this.props.skufood[0].title}</h3>
					<p>{this.props.skufood[0].desc}</p>
					<NavLink to='/deicovery' className='more'>{this.props.skufood[0].enjoy_url_text}</NavLink>
				</div>
				<ul className='list'>
					{
						this.props.skufood[1].map(item=>
							<li key={item.id}><NavLink to={`/product/${item.id}`}><img src={item.url} alt='' /></NavLink></li>
						)
					}
				</ul>
			</div>
		)
	}



}

export default Skufood