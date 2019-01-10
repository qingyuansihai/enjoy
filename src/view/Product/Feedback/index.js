import React, {Component} from 'react'
import {NavLink} from "react-router-dom";
import './index.scss'

class Feedback extends Component {
	constructor(props) {
		super(props);
		this.state = {
			feedbackInfo: this.props.data.data
		}
	}

	render() {
		return (
			<div id="feedback">
				{
					this.state.feedbackInfo ?
						<div>
							<h3 className="card-title">用户评价</h3>
							<div className="user">
								<img src={this.state.feedbackInfo.avatar} alt=""/>
								<span>{this.state.feedbackInfo.nick_name}</span>
							</div>
							<div className="score">
								{

									this.state.feedbackInfo.scores.map(item =>
										<span key={item.id}>{item.name} {item.score.toFixed(1)}</span>
									)
								}
							</div>
							<p className="user-text">{this.state.feedbackInfo.text}</p>
							<div className="image">
								{
									this.state.feedbackInfo.images.map((item, index) =>
										<img src={item} alt="" key={index}/>
									)
								}
							</div>
							<div className="more">
								<NavLink to={`/feedback/${this.props.match.params.id}`}>
									<span>查看全部评价</span>
									<i className="iconfont icon-left-2"/>
								</NavLink>
							</div>
						</div>
						: null
				}

			</div>
		);
	}

}


export default Feedback