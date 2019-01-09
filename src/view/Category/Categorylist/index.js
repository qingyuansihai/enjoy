import React,{Component} from 'react';
import getCategoryList from './module';
import './index.scss';

class Categorylist extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	catelist: []
	  };
	}

	componentDidMount() {
		getCategoryList().then(res => {
			console.log(res)
			this.setState({
				catelist: res
			})
		})
	}

	render(){
		return <div id="cate-list">
			{
				this.state.catelist.map(item => {
					return (
						<div key={ item.id }>
							<p className="listtitle">{ item.name }</p>
							<ul className="listcon">
								{
									item.sub_category_list.map(listitem => {
										return (
											<li key={ listitem.id } onClick={ this.handleClick.bind(this,listitem.id) } className="listitem">{ listitem.name }</li>
										)
									})
								}
							</ul>
						</div>
					)
				})
			}
		</div>
	}

	handleClick(id) {
		this.props.history.push(`/category/${id}`)
	}
}

export default Categorylist;


