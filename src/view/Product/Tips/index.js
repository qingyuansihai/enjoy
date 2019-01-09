import React, {Component} from 'react'
import './index.scss'
import {getProductDetailInfo} from '../model'

class Tips extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div id="tips">
				<h3 className="card-title">使用提示</h3>
			</div>
		);
	}

	componentDidMount() {
		getProductDetailInfo(this.props.match.params.id).then(res => {
			console.log(res[4]);
			this.setState({

			})
		})
	}

}


export default Tips