import axios from 'axios';

function getSort () {
	return axios({
		url:'https://api.ricebook.com/4/tab/sub_category.json?category_id=8&city_id=104&from_id=0'
	}).then(res=>{
		return res.data
	})
}

export default getSort;