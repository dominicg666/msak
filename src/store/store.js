import { combineReducers,applyMiddleware,createStore,compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import ApiReducer from './reducers/apiReducer';

const AppReducers=combineReducers({
    ApiReducer
});

const rootReducer=(state,action)=>{
    return AppReducers(state,action);
}

export default createStore(rootReducer,compose(applyMiddleware(thunk,createLogger)));