import React,{Component} from 'react'
import {getDiscovery} from './model'
import Swiper from 'swiper/dist/js/swiper.js'
import Recomment from './components/Recomment'
import Omnibus from './components/Omnibus'
import Hotrecmmnet from './components/Hotrecmmnet'
import Common from './components/Common'

import './index.scss'
import 'swiper/dist/css/swiper.min.css'

class Discovery extends Component{

	constructor(props){
		super(props)
		this.state = {
			swiperlist:[],
			recommendation:'',
			omnibus:[],
			hotlist:[],
			current:1,
			skutitle:[],
			skulist:[],
			skufoodtitle:[],
			skufoodlist:[],
			skuprotitle:[],
			skuprolist:[],
			commont:[],
			proId:[],
			proidt:[]

		}
	}

	componentWillMount(){
		getDiscovery().then(res=>{
			
			var proid = res[3].data.tabs
			var newarray = []
			for(var i=0;i<proid.length;i++){
				var indexId = proid[i].enjoy_url.indexOf("1")
				var newword = proid[i].enjoy_url.substr(indexId,7)
				newarray.push(newword)
			}
			var proidt = res[4].data.tabs
			var newarrayt = []
			for(var k=0;k<proidt.length;k++){
				var indexIdt = proidt[k].enjoy_url.indexOf("1")
				var newwordt = proidt[k].enjoy_url.substr(indexIdt,7)
				newarrayt.push(newwordt)
			}

			var proidf = res[5].data.tabs
			var newarrayf = []
			for(var h=0;h<proidf.length;h++){
				var indexIdf = proidf[h].enjoy_url.indexOf("1")
				var newwordf = proidf[h].enjoy_url.substr(indexIdf,7)
				newarrayf.push(newwordf)
			}



			//console.log(newarray)
			this.setState({
				swiperlist:res[0].data.tabs,
				recommendation:res[0].data.group_section,
				omnibus:res[1].data.tabs,
				hotlist:res[2].data.tabs,
				skutitle:res[3].data.group_section,
				skulist:res[3].data.tabs,
				skufoodtitle:res[4].data.group_section,
				skufoodlist:res[4].data.tabs,
				skuprotitle:res[5].data.group_section,
				skuprolist:res[5].data.tabs,
				commont:res[3].data,
				proId:newarray,
				proidt:newarrayt,
				proidf:newarrayf
			})
			new Swiper ('.swiper-container', {
	            direction: 'horizontal',
	            loop: true,
	            autoplay: 3000,
	            slidesPerView: "auto",
	            centeredSlides:true,
	            spaceBetween: 10
			 })
			new Swiper('.omnibus', {
			  slidesPerView: 2,
			  spaceBetween: 10,
			  direction: 'horizontal'
			})
			new Swiper ('.hotlist', {
	            direction: 'horizontal',
	            loop: true,
	            autoplay: 3000,
	            slidesPerView: "auto",
	            centeredSlides:true,
	            spaceBetween: 10,
	            pagination: {
	                el: '.swiper-pagination',
	            }
			 })
		})


	}

	render(){
		return (

			<div className='discovery'>
				<div className='caption'>
					<p className='title'>{this.state.recommendation.title}</p>
					<p className='tags'>{this.state.recommendation.desc}</p>
					<div className='queue'>
						<span>{this.state.current}</span>/
						{this.state.swiperlist.length}</div>
				</div>
				<Recomment swiper = {this.state.swiperlist} />
				{
					this.state.omnibus.length !== 0 ?
					<Omnibus favertor = {this.state.omnibus}/>:null
				}
				
				<Hotrecmmnet hot = {this.state.hotlist} />

				{
					this.state.commont.length!== 0?
					<Common title = {this.state.skutitle} list={this.state.skulist} proid = {this.state.proId}/>:null
				}

				{
					this.state.commont.length!== 0?
					<Common title = {this.state.skufoodtitle} list={this.state.skufoodlist} proid = {this.state.proidt}/>:null
				}

				{
					this.state.commont.length!== 0?
					<Common title = {this.state.skuprotitle} list={this.state.skuprolist} proid = {this.state.proidf}/>:null
				}
				
			</div>
		)
	}
}

export default Discovery
