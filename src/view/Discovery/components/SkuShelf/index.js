import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import propTypes from 'prop-types'

class SkuShelf extends Component {
	static propTypes ={
		sku:propTypes.array
	}

	render(){
		return (
			<div className='sku-shelf'>
				<div className='toptitle'>
					<h3>{this.props.sku[0].title}</h3>
					<p>{this.props.sku[0].desc}</p>
					<NavLink to='/deicovery' className='more'>{this.props.sku[0].enjoy_url_text}</NavLink>
				</div>
				<ul className='list'>
					{
						this.props.sku[1].map(item=>
							<li key={item.id}><NavLink to={`/product/${item.id}`}><img src={item.url} alt='' /></NavLink></li>
						)
					}
				</ul>
			</div>
		)
	}
}

export default SkuShelf