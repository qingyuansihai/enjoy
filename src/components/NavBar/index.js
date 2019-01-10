import React,{Component} from 'react'
import {NavLink} from "react-router-dom";
import './index.scss';
import {connect} from "react-redux";
import store from "../../store";

class NavBar extends Component{

	render() {
		return (
			<div>
				{
					this.props.NavisShow?
					<div id="navBar">
					<ul>
						<li>
							<NavLink to="/home" activeClassName="active" replace>
								<i className="iconfont icon-shouye"/>
							</NavLink>
						</li>
						<li>
							<NavLink to="/discovery" activeClassName="active" replace>
								<i className="iconfont icon-faxian"/>
							</NavLink>
						</li>
						<li>
							<NavLink to="/invite" activeClassName="active" replace>
								<i className="iconfont icon-liwu"/>
							</NavLink>
						</li>
						<li>
							<NavLink to="/center" activeClassName="active" replace>
								<i className="iconfont icon-wode"/>
							</NavLink>
						</li>
					</ul>				
					</div>
					:null
				}
			</div>
		);
	}
}

export default connect(
	(state) => {
		return {
			NavisShow: state.navBarReducer
		}
	}
)(NavBar)