import axios from 'axios';
function indexpicList(){
	return axios({
		url:'https://api.ricebook.com/hub/home/v1/web/week_choice.json?city_id=104&page=0'
	}).then(res=>{
		return res.data
	})
}

export default indexpicList;