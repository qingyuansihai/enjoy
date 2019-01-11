import axios from 'axios'

function getFeedback(id, has_image, page) {
	return axios({
		url: `https://api.ricebook.com/product/feedback?product_id=${id}&restaurant_id=&has_image=${has_image}&page=${page}`
	}).then(res => {
		return res.data.list
	})
}

export default getFeedback