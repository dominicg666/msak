import {
    OFFERS_LIST_REQUEST,
    OFFERS_LIST_SUCCESS,
    OFFERS_LIST_FAILURE,
} from './actionType';

var initialState = {

    isRequest: false,
    offersList: []


}

const OfferListsReducer = (state = initialState, action) => {
    switch (action.type) {
        case OFFERS_LIST_REQUEST:
            return { ...state, isRequest: true };
        case OFFERS_LIST_SUCCESS:
            return { ...state, offersList: action.payload.gallery, isRequest: false }
        case OFFERS_LIST_FAILURE:
            return { ...state, isRequest: false }
        default:
            return state;
    }
}
export default OfferListsReducer; 