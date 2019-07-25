import {
    BANNER_REQUEST,
    BANNER_SUCCESS,
    BANNER_FAILURE
} from './actionType';

var initialState = {

    isBannerRequest: false,
    bannerList: []


}

const RestarantBannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case BANNER_REQUEST:
            return { ...state, isBannerRequest: true };
        case BANNER_SUCCESS:
            return { ...state, bannerList: action.payload.gallery, isBannerRequest: false }
        case BANNER_FAILURE:
            return { ...state, isBannerRequest: false }
        default:
            return state;
    }
}
export default RestarantBannerReducer; 