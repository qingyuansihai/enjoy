import React,{Component} from 'react'
import propTypes from 'prop-types'
import {NavLink} from  'react-router-dom'



class Commont extends Component {

	constructor(props){
		super(props)
		this.state={
			title:this.props.title,
			list:this.props.list,
			proid:this.props.proid
		}
	}
	static propTypes={
		title:propTypes.object,
		list:propTypes.array,
		proid:propTypes.array
	}

	render(){
		return (
			<div className='sku-shelf'>
					<div className='toptitle'>
						<h3>{this.props.title.title}</h3>
						<p>{this.props.title.desc}</p>
						<NavLink to='/deicovery' className='more'>{this.props.title.enjoy_url_text}</NavLink>
					</div>
					<ul className='list'>
						{
							this.props.list.map((item,index)=>
								<li key={item.id}><NavLink to={`/product/${this.state.proid[index]}`}><img src={item.url} alt='' /></NavLink></li>
							)
						}
					</ul>
				
			</div>
		)
	}
}


// function Commont(props){

// 	//var {commontlist} = props
// 	console.log(props)

// 	return (
// 			<div>
// 			{
// 				// props?
// 				// props.commontlist.group_section.desc:null

// 			}

// 			</div>

			
		

// 	)
// }

export default Commont


