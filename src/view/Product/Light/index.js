import React, {Component} from 'react'
import './index.scss'
import {getProductDetailInfo} from '../model'

class Light extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lights: []
		}
	}


	render() {
		return (
			<div id="light">
				<h3 className="card-title">亮点</h3>
				{
					this.state.lights.map((item,index) =>
						<div className="lights-item" key={index}>
							<img src={item.img_url} alt=""/>
						</div>
					)
				}
			</div>
		);
	}

	componentDidMount() {
		getProductDetailInfo(this.props.match.params.id).then(res => {
			console.log(res[3]);
			this.setState({
				lights: res[3].data.lights
			})
		})
	}


}


export default Light