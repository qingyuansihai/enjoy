import React,{Component} from 'react';
import axios from 'axios';

class Categorylistitem extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	datalist: null
	  };
	}

	componentDidMount() {
		// axios ({
		// 	url:`https://api.ricebook.com/4/tab/sub_category.json?category_id=${this.props.params.cateid}&city_id=104&from_id=0`
		// }).then(res=>{
		// 	console.log(res)
		// 	this.setState({
		// 		datalist: res
		// 	})
		// })
	}

	render(){
		return <div>
		!!!!!!!!!!!!!!!!!!!
			{this.state.datalist}
		</div>
	}
}

export default Categorylistitem
 