import {
	createStore,
	combineReducers
} from 'redux';

import {routeReducer} from 'redux-simple-router';


const reducer = combineReducers({
	routing: routeReducer
});

export default (initialState) => {
	return createStore(reducer, initialState);
}
