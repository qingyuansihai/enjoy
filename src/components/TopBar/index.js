import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './index.scss'
import logo from './logo.png';
import {connect} from 'react-redux';
import store from '../../store';

class TopBar extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isShow: false,
	  	locData:["上海","北京","南京","天津","广州","成都","杭州","深圳","苏州","西安","重庆","长沙"],
	  	curData:"北京"
	  };
	}
	render(){
		return (
			<div>
			{
				this.props.topIsShow?
				<header className='header'>
				{
					this.props.titleName?
					<NavLink to='/category'  className='left' replace>分类</NavLink>
					:<NavLink to='/home'  className='left' replace>首页</NavLink>				
				}
					<div className='logo'>
						<img src={logo} alt='' />
					</div>
					<span className="loc" onClick={ this.LocClick.bind(this) }>{ this.state.curData }</span>
					{
						this.state.isShow?
						<div className="secloc">
							<p>本地服务开通城市</p>
							<ul className="secul">
								{
									this.state.locData.map((item,index) => {
										return <li key={index} onClick={ this.LocDataClick.bind(this,item) } className="secli">{ item }</li>
									})
								}
							</ul>
						</div>
						:null
					}
					<div className='right'>
						<NavLink to="/center"><span className="iconfont">&#xe601;</span></NavLink>
						<span className="iconfont">&#xe617;</span>
					</div>
				</header>
				:null	
			}
			</div>
		)
	}

	LocClick() {
		this.setState({
			isShow: !this.state.isShow
		})
	}

	LocDataClick(name) {
		this.setState({
			curData: name,
			isShow: false
		})
	}

	// clickToCenter() {
	// 	this.props.history.push('/center')
	// }
}
export default connect(
	(state) => {
		return {
			titleName: state.TopBarReducer,
			topIsShow: state.showTopReducer
		}
	}
)(TopBar)