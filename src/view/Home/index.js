import React, {Component} from 'react';
import indexpicList from './module';
import './index.scss';
import {PullToRefresh, Toast} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import ReactDOM from 'react-dom';


class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			refreshing: false,
			down: true,
			height: document.documentElement.clientHeight,
			detalist: []
		};
	}

	componentDidMount() {
		Toast.loading('Loading...',0.8, ()=>{}, true);

		const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
		setTimeout(() => this.setState({
			height: hei,
			data: ["1111", "2222", "3333"],
		}), 0);
	}

	componentWillMount() {
		indexpicList().then(res => {

			console.log(res)
			this.setState({
				detalist: res
			})
		})
	}

	render() {
		return (<div id="all">
			<div className="area">
				<div className="alllist">
					{
						this.state.detalist.map((item, index) => {
							return (
								<div key={index} className="ilist">
									<h3>{item.group_section.title}</h3>
									<div className="titleline">{item.group_section.desc}</div>
									<ul className="oneitem">
										{
											item.tabs.map(tooch => {
												return (
													<li key={tooch.id} onClick={this.handleClick.bind(this,tooch.enjoy_url)}>
														<img src={tooch.url} alt="{tooch.tag}"/>
														<div className="toochtitle">{tooch.title}</div>
														<div className="toochdesc">{tooch.desc}</div>
													</li>
												)
											})
										}
									</ul>
								</div>
							)
						})
					}
				</div>
				<PullToRefresh
					damping={60}
					ref={el => this.ptr = el}
					style={{
						height: this.state.height - 100,
						overflow: 'auto',
					}}
					indicator={this.state.down ? {} : {deactivate: '下拉可以刷新'}}
					direction={this.state.down === 'down'}
					refreshing={this.state.refreshing}
					onRefresh={() => {
						this.setState({refreshing: true});

						//axios...
						setTimeout(() => {
							this.setState({
								refreshing: false,
								data: ["kerwin", "xiaoming", ...this.state.data]
							});
						}, 1000);
					}}
				>
					{this.state.detalist.map((titem, tindex) => (
						<div key={tindex} class="ilist">
							{
								<div key={tindex} className="ilist">
									<h3>{titem.group_section.title}</h3>
									<div className="titleline">{titem.group_section.desc}</div>
									<ul className="oneitem">
										{
											titem.tabs.map(tooch => {
												return (
													<li key={tooch.id} onClick={this.handleClick}>
														<img src={tooch.url} alt="{tooch.tag}"/>
														<div className="toochtitle">{tooch.title}</div>
														<div className="toochdesc">{tooch.desc}</div>
													</li>
												)
											})
										}
									</ul>
								</div>
							}
						</div>
					))}
				</PullToRefresh>
			</div>
		</div>)
	}



			handleClick(proId) {
				console.log(proId)

				var Indexof = proId.indexOf("1")

				var typeId = proId.substr(Indexof,7)

                // var proUrl = res[0].tabs;
                // var newArray = []
                // for(var i=0;i<proUrl.length;i++){
                // 	var Indexof = proUrl[i].enjoy_url.indexOf("1")
                // 	
                // 	newArray.push(typeId)
                // }

                // console.log(newArray)

				this.props.history.push(`/product/${typeId}`);
			}

}

export default Home
