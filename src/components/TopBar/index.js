import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './index.scss'
import logo from './logo.png';

class TopBar extends Component{
	render(){
		return (
			<header className='header'>
			<NavLink to='/category'  className='left' replace>分类</NavLink>
				<div className='logo'><img src={logo}/></div>
				<div className='right'>
					<span class="iconfont">&#xe601;</span>
					<span class="iconfont">&#xe617;</span>
				</div>
			</header>
		)
	}
}
export default TopBar