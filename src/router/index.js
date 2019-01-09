import React from 'react'
import {HashRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import App from '../App'
import Home from '../view/Home'
import Category from '../view/Category'
import Discovery from '../view/Discovery'
import Product from '../view/Product'
import Feedback from '../view/Feedback'


const router = (
	<Router>
		<App>
			<Switch>
				<Route path='/home' component={Home}/>
				<Route path='/category' component={Category}/>
				<Route path='/discovery' component={Discovery}/>
				<Route path='/product' component={Product}/>
				<Route path='/feedback/:id' component={Feedback} exact/>
				<Redirect  from='*' to='/home'/>
			</Switch>
		</App>
	</Router>
)

export default router



