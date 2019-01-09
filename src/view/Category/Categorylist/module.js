import axios from 'axios';

function getCategoryList() {
	return axios({
		url:"https://s1.ricebook.com/cdn/home/djEvdmlydHVhbC9pbl9jYXRlZ29yeS5qc29uP2NpdHlfaWQ9MTA0JmlzX25ld19sb2NhbD1mYWxzZSZtZDU9NzQ2MTg0ZGU2ZDk1MDdjNGIyOTgxMDA4N2E5NDAxMmUmMjAxOTAxMDkxMTAw.json"
	}).then(res => {
		return res.data
	})
}

export default getCategoryList;