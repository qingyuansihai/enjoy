import React,{Component} from 'react'
import './index.scss'
import {getDiscovery} from './model'
// import {NavLink} from 'react-router-dom'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import Recomment from './components/Recomment'
import Omnibus from './components/Omnibus'
import Hotrecmmnet from './components/Hotrecmmnet'


class Discovery extends Component{

	constructor(props){
		super(props)
		this.state = {
			swiperlist:[],
			recommendation:'',
			omnibus:[],
			hotlist:[]
		}
	}


	componentWillMount(){
		getDiscovery().then(res=>{
			console.log(res[2].data.tabs)
			this.setState({
				swiperlist:res[0].data.tabs,
				recommendation:res[0].data.group_section,
				omnibus:res[1].data.tabs,
				hotlist:res[2].data.tabs
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

	componentDidMount(){
		
	}

	render(){
		return (

			<div className='discovery'>
				<div className='caption'>
					<p className='title'>{this.state.recommendation.title}</p>
					<p className='tags'>{this.state.recommendation.desc}</p>
					<div className='queue'><span>1</span>/7</div>
				</div>

				<Recomment swiper = {this.state.swiperlist} />
				<Omnibus favertor = {this.state.omnibus} />
				<Hotrecmmnet hot = {this.state.hotlist} />



			</div>
		)
	}
}

export default Discovery
