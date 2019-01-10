const TopBarReducer = (prevstate=true,action)=>{

	// console.log(prevstate,action);
	let {type,payload}= action;
	switch(type){
		case "ChangeHome":
			return payload;
		case "ChangeCate":
			return payload;

		default:
			return prevstate
	}

};

export default TopBarReducer;