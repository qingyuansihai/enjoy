import React, {Component} from 'react'
import './index.scss'
import {getProductDetailInfo} from '../model'

class Like extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}


	render() {
		return (
			<div id="like">
				<h3 className="card-title">猜你喜欢</h3>
			</div>
		);
	}

	componentDidMount() {
		getProductDetailInfo(this.props.match.params.id).then(res => {
			console.log(res[5]);
			this.setState({

			})
		})
	}


}


export default Like