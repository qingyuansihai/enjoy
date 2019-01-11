import axios from 'axios'


function getProductBasicInfo(product_id) {
	return axios({
		url: `https://api.ricebook.com/product/info/product_detail.json?product_id=${product_id}`,
	}).then(res => {
		return res.data.basic
	})
}

function getProductDetailInfo(product_id) {
	return axios({
		url: `https://api.ricebook.com/product/info/product_detail.json?product_id=${product_id}`,
	}).then(res => {
		if (res.data.basic.product_id === 1024077) {
			console.log(11111)
			res.data.modules.shift()
		}
		return res.data.modules
	})
}


export {getProductBasicInfo, getProductDetailInfo}