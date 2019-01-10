const navBarReducer = (prevstate=true,action)=>{

	// console.log(prevstate,action);
	let {type,payload}= action;
	switch(type){
		case "HideNavBar":
			return payload;
		case "ShowNavBar":
			return payload;

		default:
			return prevstate
	}

};

export default navBarReducer;