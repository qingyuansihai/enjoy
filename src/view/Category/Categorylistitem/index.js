import React,{Component} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import './index.scss';
import {connect} from 'react-redux';
import store from '../../../store';
import {getSort,getDatalist} from './module';

class Categorylistitem extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	datalist: [],
	  	sortdata: [],
	  	isShow: false,
	  	current: 0,
	  	sortcon: "智能排序",
	  	changetri: "tridown"
	  };
	}


	componentWillUnmount() {
		this.props.show()
		this.props.isCate()
	}

	componentDidMount() {
		this.props.hide()
		this.props.isHome()

		//获取的是分类页的数据
		getDatalist(this.props.match.params.cateid).then(res=>{
			this.setState({
				datalist: res
			})
		})
		//获取的是排序的数据
		getSort(this.props.match.params.cateid).then(res=>{
			this.setState({
				sortdata: res
			})
		})
	}


	render(){
		return <div>
			<ul className="navlist">
				<li className="navleft">全部</li>
				<li className="navright" onClick={ this.handleClickNav.bind(this) }><span className="navword">{ this.state.sortcon }</span><span className={ this.state.changetri }></span>
					{
						this.state.isShow?
						<ul className="seclist">
							{
								this.state.sortdata.map((item,index) => 
									<li key={ item.sort_id } onClick={ this.handleSecClick.bind(this,index,item.sort_name,item.sort_id) } className={this.state.current===index?'active secitem':'secitem'}>{ item.sort_name }</li>
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
						<li className="downdata" key={ item.product_id } onClick={ this.handleDatalist.bind(this,item.product_id) }>
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
			isShow: !this.state.isShow,
			changetri: !this.state.isShow ? "triup" : "tridown"
		})
	}

	handleSecClick(index,name,id) {
		//为了代码整洁可以写在module里面
		axios({
			url:`https://api.ricebook.com/4/tab/category_product_list.json?category_id=${this.props.match.params.cateid}&sort=${id}&from_id=0&city_id=104&page=0`
		}).then(res=>{
			this.setState({
				current: index,
				sortcon: name,
				datalist: res.data
			})
		})

	}

	handleDatalist(id) {
		this.props.history.push(`/product/${id}`)
	}
}


export default connect(
	null,
	{
		show() {
			return {
				type:"ShowNavBar",
				payload:true
			}
		},
		hide() {
			return {
				type:"HideNavBar",
				payload:false
			}
		},
		isHome() {
			return {
				type:"ChangeHome",
				payload:false
			}
		},
		isCate() {
			return {
				type:"ChangeCate",
				payload:true
			}
		}
	}
)(Categorylistitem)
 