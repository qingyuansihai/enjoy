import React,{Component} from 'react'
import './index.scss'
import {getDiscovery} from './model'
import {NavLink} from 'react-router-dom'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'


class Discovery extends Component{

	constructor(props){
		super(props)
		this.state = {
			swiperlist:[],
			recommendation:'',
			omnibus:[]
		}
	}


	componentWillMount(){
		getDiscovery().then(res=>{
			//console.log(res[0].data.tabs)
			this.setState({
				swiperlist:res[0].data.tabs,
				recommendation:res[0].data.group_section,
				omnibus:res[1].data.tabs,
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
			  slidesPerView: 3,
			  spaceBetween: 30,
			  pagination: {
			    el: '.swiper-pagination',
			    clickable: true,
			  },
			});
			
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
				<div className='recomment'>
					<div className="swiper-container">
					  <div className="swiper-wrapper">

					    {
					    	this.state.swiperlist.map((item,index)=> 
					    		<a className="swiper-slide" key={index} href={item.enjoy_url}>
					    			<img src={item.url}  alt='' />
					    			<p className='tips'>{item.tag}</p>
					    			<p className='title'>{item.title}</p>
					    			<p className='tags'>{item.desc}</p>
					    		</a>
					    	)
					    }
					  </div>
					</div>
				</div>

				<div className='omnibus'>
					  <div className="swiper-wrapper">

					    <div className="swiper-slide">Slide 1</div>
					    <div className="swiper-slide">Slide 2</div>
					    <div className="swiper-slide">Slide 3</div>
					  </div>
				</div>
			</div>
		)
	}
}

export default Discovery
