import React,{Component} from 'react';
import axios from 'axios';
import './index.scss';
// import getSort from './module'

class Categorylistitem extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	datalist: [],
	  	sortdata: [],
	  	isShow: false,
	  	current: 0,
	  	sortcon: "智能排序"
	  };
	}

	componentDidMount() {
		axios ({
			url:`https://api.ricebook.com/4/tab/category_product_list.json?category_id=${this.props.match.params.cateid}&sort=1&from_id=0&city_id=104&page=0`
		}).then(res=>{
			console.log(res.data)
			this.setState({
				datalist: res.data
			})
		});

		axios({
			url:`https://api.ricebook.com/4/tab/sub_category.json?category_id=${this.props.match.params.cateid}&city_id=104&from_id=0`
		}).then(res=>{
			console.log(res.data)
			this.setState({
				sortdata: res.data.sort
			})
		})

		// getSort().then(res=>{
		// 	console.log(res+111111111)
		// 	this.setState({
		// 		sortdata: res.sort
		// 	})
		// })
	}


	render(){
		return <div>
			<ul className="navlist">
				<li className="navleft">全部</li>
				<li className="navright" onClick={ this.handleClickNav.bind(this) }><span className="navword">{ this.state.sortcon }</span><span className="tridown"></span>
					{
						this.state.isShow?
						<ul className="seclist">
							{
								this.state.sortdata.map((item,index) =>
									<li key={ item.sort_id } onClick={ this.handleSecClick.bind(this,index,item.sort_name) } className={this.state.current===index?'active secitem':'secitem'}>{ item.sort_name }</li>
								)
							}
						</ul>
						:null
					}
				</li>
			</ul>
			<ul className="downlist">
				{
					this.state.datalist.map(item => 
						<li className="downdata" key={ item.product_id }>
							<img src={item.product_image}/>
							<div className="itemdown">
								<p className="listup">{ item.name }</p>
								<p className="listdown">
									<span className="priceleft">{ item.price/100+"/2位" }</span>
									<span className="priceright">{ "￥"+item.original_price/100 }</span>
								</p>
							</div>
						</li>
					)
				}
			</ul>
		</div>
	}

	handleClickNav() {
		this.setState({
			isShow: !this.state.isShow
		})
	}

	handleSecClick(index,name) {
		this.setState({
			current: index,
			sortcon: name
		})
	}
}


export default Categorylistitem
 