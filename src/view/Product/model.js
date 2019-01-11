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
		switch (res.data.basic.product_id) {
			case 1042633:
				return getProductDetailInfo(1024078);
			case 1043819:
				return getProductDetailInfo(1024078);
			case 1035976:
				return getProductDetailInfo(1035777);
			default:
		}

		if (res.data.basic.product_id === 1024077) {
			res.data.modules.shift()
		}

		return res.data.modules
	})
}


export {getProductBasicInfo, getProductDetailInfo}