import axios from 'axios';

function getSort (id) {
	return axios({
		url:`https://api.ricebook.com/4/tab/sub_category.json?category_id=${id}&city_id=104&from_id=0`
	}).then(res=>{
		return res.data.sort
	})
}

function getDatalist (id) {
	return 	axios ({
		url:`https://api.ricebook.com/4/tab/category_product_list.json?category_id=${id}&sort=1&from_id=0&city_id=104&page=0`
	}).then(res=>{
		return res.data
	});
} 

export {getSort,getDatalist}