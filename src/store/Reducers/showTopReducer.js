const showTopReducer = (prevstate=true,action)=>{

	// console.log(prevstate,action);
	let {type,payload}= action;
	switch(type){
		case "HideTopBar":
			return payload;
		case "ShowTopBar":
			return payload;

		default:
			return prevstate
	}
};

export default showTopReducer;
