import {
    CATEGORY_REQUEST,
    CATEGORY_SUCCESS,
    CATEGORY_FAILURE
} from './actionType';

var initialState = {

    isCategoryRequest: false,
    categoryList: []


}

const RestaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY_REQUEST:
            return { ...state, isCategoryRequest: true };
        case CATEGORY_SUCCESS:
            return { ...state, categoryList: action.payload.gallery, isCategoryRequest: false }
        case CATEGORY_FAILURE:
            return { ...state, isCategoryRequest: false }
        default:
            return state;
    }
}
export default RestaurantReducer; 