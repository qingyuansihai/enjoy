import {createStore,combineReducers,compose} from "redux"

//创建reducer, 记录所有状态,
import navBarReducer from "./Reducers/navBarReducer"
import TopBarReducer from "./Reducers/TopBarReducer"
import thunk from "redux-thunk"
import promiseThunk from "redux-promise"
import {applyMiddleware} from "redux"

const reducer = combineReducers({
	navBarReducer,
	TopBarReducer
});


// const store = createStore(reducer,applyMiddleware(thunk,promiseThunk));


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
	applyMiddleware(thunk,promiseThunk)
));



export default store;
