import React,{Component} from 'react'

class Category extends Component{
	render(){
		return <div>
			{this.props.children}
		</div>
	}
}

export default Category;
