import React,{Component} from 'react'
import './index.scss'
import getFeedback from './model'
import {connect} from 'react-redux'

class Feedback extends Component{
	constructor(props) {
		super(props);
		this.state = {
			isChecked: 0,
			new: [],
		};
		this.page = 0
	}

	render() {
		return (
			<div id="all-feedback">
				<div className="feed-tabs">
					<span className={this.state.isChecked===0 ? 'checked' : ''} onClick={this.handleNew.bind(this)}>最新</span>
					<span className={this.state.isChecked===1 ? 'checked' : ''} onClick={this.handleImage.bind(this)}>有图</span>
				</div>

				{
					this.state.new.length !== 0 ?
						<ul className="feed-list">
							{
								this.state.new.map(item =>
									<li key={item.id} className="feed-list-item">
										<div className="user">
											<img src={item.avatar} alt=""/>
											<span>{item.nick_name}</span>
										</div>
										<div className="score">
											{

												item.scores.map(item =>
													<span key={item.id}>{item.name} {item.score.toFixed(1)}</span>
												)
											}
										</div>
										<p className="user-text">{item.text}</p>
										<div className="image">
											{
												item.images.map((item, index) =>
													<img src={item} alt="" key={index}/>
												)
											}
										</div>
									</li>
								)
							}

						</ul>
						:
						<h4>暂时没有评论，快来添加吧！</h4>
				}

			</div>
		);
	}

	handleNew() {
		getFeedback(this.props.match.params.id, false, this.page).then(res => {
			console.log(res);
			this.setState({
				isChecked: 0,
				new: res
			})
		});
	}
	handleImage() {
		getFeedback(this.props.match.params.id, true, this.page).then(res => {
			console.log(res);
			this.setState({
				isChecked: 1,
				new: res
			})
		});
	}


	componentDidMount() {
		getFeedback(this.props.match.params.id, false, this.page).then(res => {
			console.log(res);
			this.setState({
				new: res
			})
		});

		this.props.hideNavBar()

		// console.log(top)
	}

	componentWillUnmount() {
		this.props.showNavBar()
	}
}

export default connect(
	null,
	{
		showNavBar(){
			return {
				type:"ShowNavBar",
				payload:true  // payload 可以随便起名字
			}
		},

		hideNavBar(){
			return {
				type:"HideNavBar",
				payload:false  // payload 可以随便起名字
			}
		}
	}
)(Feedback)