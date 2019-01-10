import React, {Component} from 'react'
import './index.scss'

class Like extends Component {
	constructor(props) {
		super(props);
		this.state = {
			likeList: this.props.data.data.recommend
		}
	}


	render() {
		return (
			<div id="like">
				<h3 className="card-title">猜你喜欢</h3>
				<ul className="like">
					{
						this.state.likeList.map((item, index) =>
							<li className="clearfix" key={index} onClick={this.handleClick.bind(this, item.product_id)}>
								<img src={item.product_image_url} alt=""/>
								<div className="desc">
									<p className="sub-title">{item.product_name}</p>
									<p className="price">
										<span>{item.price}/{item.show_entity_name}</span>
									</p>
								</div>
							</li>
						)
					}
				</ul>
			</div>
		);
	}

	handleClick(id) {
		this.props.history.push(`/product/${id}`)
	}

	componentWillReceiveProps(nextProps, nextContext) {

	}


}


export default Like