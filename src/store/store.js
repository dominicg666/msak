import { combineReducers,applyMiddleware,createStore,compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import ApiReducer from './reducers/apiReducer';
import RestaurantReducer from './reducers/restaurant/restaurantReducer';
import RestarantBannerReducer from './reducers/restaurant/restarantBannerReducer';


const AppReducers=combineReducers({
    ApiReducer,
    RestaurantReducer,
    RestarantBannerReducer
});

const rootReducer=(state,action)=>{
    return AppReducers(state,action);
}

export default createStore(rootReducer,compose(applyMiddleware(thunk,createLogger)));