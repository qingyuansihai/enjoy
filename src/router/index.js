import React from 'react'
import {HashRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import App from '../App'
import Home from '../view/Home'
import Category from '../view/Category'
import Categorylist from '../view/Category/Categorylist'
import Categorylistitem from '../view/Category/Categorylistitem'
import Discovery from '../view/Discovery'
import Product from '../view/Product'
import Feedback from '../view/Feedback'


const router = (
	<Router>
		<App>
			<Switch>
				<Route path='/home' component={Home}/>
				<Route path='/category' render={()=>
					<Category>
						<Switch>
							<Route path="/category/list" component={Categorylist}></Route>
							<Route path="/category/:cateid" component={Categorylistitem}></Route>
							<Redirect from="/category" to="/category/list" />
						</Switch>
					</Category>
				}/>
				<Route path='/discovery' component={Discovery}/>
				<Route path='/product' component={Product}/>
				<Route path='/feedback/:id' component={Feedback} exact/>
				<Redirect  from='*' to='/home'/>
			</Switch>
		</App>
	</Router>
)

export default router



