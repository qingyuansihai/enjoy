import axios from 'axios';

function getCenter () {
	return axios({
		url:`https://api.ricebook.com/redkeep/v3/user/center.json`
			
	}).then(res=>{
		console.log(res)
		return res
	})
}

export default getCenter;