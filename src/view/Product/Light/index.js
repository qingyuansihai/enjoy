import React, {Component} from 'react'
import './index.scss'

class Light extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lights: this.props.data.data.lights
		}
	}


	render() {
		return (
			<div id="light">
				<h3 className="card-title">亮点</h3>
				{
					this.state.lights.map((item, index) =>
						<div className="lights-item" key={index}>
							<img src={item.img_url} alt=""/>
							<h4 className="light-item">{item.title}</h4>
							<p className="light-content">{item.content}</p>
						</div>
					)
				}
			</div>
		);
	}


}


export default Light