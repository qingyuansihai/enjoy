import React,{Component} from 'react';
import axios from 'axios';
import './index.scss';

class Categorylistitem extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	datalist: []
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
		})
	}


	render(){
		return <div>
			<ul className="navlist">
				<li className="navleft">全部</li>
				<li className="navright">智能排序<span className="tridown"></span></li>
			</ul>
			<ul className="downlist">
				{
					this.state.datalist.map(item => 
						<li className="downdata">
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
}

export default Categorylistitem
 