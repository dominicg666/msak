import {
    OFFERS_DETAILS_REQUEST,
    OFFERS_DETAILS_SUCCESS,
    OFFERS_DETAILS_FAILURE,
    OPEN_OFFER_DETALS
} from './actionType';

var initialState = {

    isRequest: false,
    offerDetails: null,
    offer_id: null,


}

const OfferDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_OFFER_DETALS:
            return { ...state, offer_id: action.payload.offer_id };
        case OFFERS_DETAILS_REQUEST:
            return { ...state, isRequest: true };
        case OFFERS_DETAILS_SUCCESS:
            return { ...state, offerDetails: action.payload.restuarant, isRequest: false }
        case OFFERS_DETAILS_FAILURE:
            return { ...state, isRequest: false }
        default:
            return state;
    }
}
export default OfferDetailsReducer; 