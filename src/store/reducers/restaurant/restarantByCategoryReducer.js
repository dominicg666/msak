import {
    RESTARANT_LIST_REQUEST,
    RESTARANT_LIST_SUCCESS,
    RESTARANT_LIST_FAILURE
} from './actionType';

var initialState = {

    isRequest: false,
    restarantList: {}


}

const RestarantByCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESTARANT_LIST_REQUEST:
            state.restarantList[`routekey_${action.payload.key}`] = {};
            state.restarantList[`routekey_${action.payload.key}`]['data'] = [];
            state.restarantList[`routekey_${action.payload.key}`]['isRequest'] = true
            return { ...state };
        case RESTARANT_LIST_SUCCESS:
            state.restarantList[`routekey_${action.payload.key}`]['data'] = action.payload.restuarant;
            state.restarantList[`routekey_${action.payload.key}`]['isRequest'] = false
            return { ...state }
        case RESTARANT_LIST_FAILURE:
            state.restarantList[`routekey_${action.payload.key}`]['isRequest'] = false
            return { ...state }
        default:
            return state;
    }
}
export default RestarantByCategoryReducer; 