import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './index.scss'
import logo from './logo.png';
import {connect} from 'react-redux';
import store from '../../store';

class TopBar extends Component{
	render(){
		return (
			<header className='header'>
			{
				this.props.titleName?
				<NavLink to='/category'  className='left' replace>分类</NavLink>
				:<NavLink to='/home'  className='left' replace>首页</NavLink>				
			}
				<div className='logo'><img src={logo} alt='' /></div>
				<div className='right'>
					<span className="iconfont">&#xe601;</span>
					<span className="iconfont">&#xe617;</span>
				</div>
			</header>
		)
	}
}
export default connect(
	(state) => {
		return {
			titleName: state.TopBarReducer
		}
	}
)(TopBar)