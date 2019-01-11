import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import store from '../../store';
import getCenter from './module';
import { Switch,Icon } from 'antd';

class Center extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	centerData: null
	  };
	}

	componentWillMount() {
		this.props.hide()
	}

	componentWillUnmount() {
		this.props.show()
	}

	componentDidMount() {
		getCenter().then(res=>{
			console.log(res)
			this.setState({
				centerData: res
			})
		})
	}

	render() {
		return (
			<div>
				 <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
				    <br />
				    <Switch checkedChildren="1" unCheckedChildren="0" />
				    <br />
				<Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />} defaultChecked />
			</div>
		)
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
		}
	}
)(Center);