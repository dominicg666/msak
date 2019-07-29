import {
    RESTARANT_DETAILS_REQUEST,
    RESTARANT_DETAILS_SUCCESS,
    RESTARANT_DETAILS_FAILURE,
    OPEN_RESTARANT_DETALS
} from './actionType';

var initialState = {

    isRequest: false,
    restarantDetails: null,
    restarant_id: null,


}

const RestaurantDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_RESTARANT_DETALS:
            return { ...state, restarant_id: action.payload.restarant_id };
        case RESTARANT_DETAILS_REQUEST:
            return { ...state, isRequest: true };
        case RESTARANT_DETAILS_SUCCESS:
            return { ...state, restarantDetails: action.payload, isRequest: false }
        case RESTARANT_DETAILS_FAILURE:
            return { ...state, isRequest: false }
        default:
            return state;
    }
}
export default RestaurantDetailsReducer; 