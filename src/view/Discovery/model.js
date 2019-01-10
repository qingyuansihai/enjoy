import axios from 'axios'

function getDiscovery(){
	return axios({url:'/hub/home/v1/web/explore.json?city_id=104'}).then(res=>{
		return res.data //console.log()
	})
}

export {getDiscovery}

