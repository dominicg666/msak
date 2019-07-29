import { combineReducers,applyMiddleware,createStore,compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import ApiReducer from './reducers/apiReducer';
import RestaurantReducer from './reducers/restaurant/restaurantReducer';
import RestarantBannerReducer from './reducers/restaurant/restarantBannerReducer';
import RestarantByCategoryReducer from './reducers/restaurant/restarantByCategoryReducer';
import OfferListsReducer from './reducers/offers/offerListsReducer';
import OfferDetailsReducer from './reducers/offers/offerDetailsReducer';
import RestaurantDetailsReducer from './reducers/restaurant/restaurantDetailsReducer';

const AppReducers=combineReducers({
    ApiReducer,
    RestaurantReducer,
    RestarantBannerReducer,
    RestarantByCategoryReducer,
    OfferListsReducer,
    OfferDetailsReducer,
    RestaurantDetailsReducer
});

const rootReducer=(state,action)=>{
    return AppReducers(state,action);
}

export default createStore(rootReducer,compose(applyMiddleware(thunk,createLogger)));