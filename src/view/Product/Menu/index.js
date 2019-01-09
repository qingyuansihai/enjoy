import React, {Component} from 'react'
import './index.scss'
import {getProductDetailInfo} from '../model'

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuList: []
		}
	}


	render() {
		return (
			<div id="menu">
				<h3 className="card-title">MENU</h3>
				{
					this.state.menuList.map((item,index) =>
						<div className="menu-item" key={index}>
							<p className="menu-title">-{item.sub_title}-</p>
							{
								this.state.menuList[index].text.map((data,index) =>
									<p key={index}>{data}</p>
								)
							}
						</div>
					)
				}
			</div>
		);
	}

	componentDidMount() {
		getProductDetailInfo(this.props.match.params.id).then(res => {
			console.log(res[2]);
			this.setState({
				menuList: res[2].data.contents
			})
		})
	}


}


export default Menu