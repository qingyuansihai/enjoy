import React, {Component} from 'react'
import './index.scss'


class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuList: this.props.data.data.contents
		}
	}

	render() {
		return (
			<div id="menu">
				<h3 className="card-title">MENU</h3>
				{
					this.state.menuList.map((item, index) =>
						<div className="menu-item" key={index}>
							<p className="menu-title">-{item.sub_title}-</p>
							{
								this.state.menuList[index].text.map((data, index) =>
									<p key={index}>{data}</p>
								)
							}
						</div>
					)
				}
			</div>
		);
	}

}


export default Menu