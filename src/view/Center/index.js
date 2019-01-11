import React,{Component} from 'react';
import {connect} from 'react-redux';
import store from '../../store';
import getCenter from './module';
import './index.scss';

class Center extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	centerData: null
	  };
	}

	componentWillMount() {
		this.props.hide()
		this.props.navhide()
	}

	componentWillUnmount() {
		this.props.show()
		this.props.navshow()
	}

	// componentDidMount() {
	// 	getCenter().then(res=>{
	// 		console.log(res)
	// 		this.setState({
	// 			centerData: res
	// 		})
	// 	})
	// }

	render() {
		return (
			<div className="centercon">
				<h1 onClick={ this.clickToHome.bind(this) }>E N J O Y</h1>
				<input type="text" name="telephone" placeholder="手机号" className="tel"/>
				<div className="mes">
					<input type="text" name="verification" placeholder="短信验证码" className="ver"/>
					<button className="verbtn">获取验证码</button>
				</div>
				<button className="logbtn">登录</button>
				<p className="upcon">未注册的用户登录后自动创建账户</p>
				<p className="downcon">登录即表示您同意
					<a href="https://topic.ricebook.com/topicpage/agreement.html">用户协议</a>
				</p>
			</div>
		)
	}

	clickToHome() {
		this.props.history.push('/home')
	}
}

export default connect(
	null,
	{
		show() {
			return {
				type:"ShowTopBar",
				payload:true
			}
		},
		hide() {
			return {
				type:"HideTopBar",
				payload:false
			}
		},
		navshow() {
			return {
				type:"ShowNavBar",
				payload:true
			}
		},
		navhide() {
			return {
				type:"HideNavBar",
				payload:false
			}
		}
	}
)(Center);