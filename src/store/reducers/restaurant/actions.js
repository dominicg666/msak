import * as axios from 'axios';

import {
    CATEGORY_REQUEST,
    CATEGORY_SUCCESS,
    CATEGORY_FAILURE,

    BANNER_REQUEST,
    BANNER_SUCCESS,
    BANNER_FAILURE,

    RESTARANT_LIST_REQUEST,
    RESTARANT_LIST_SUCCESS,
    RESTARANT_LIST_FAILURE
} from './actionType';

export const fetchRestarantListRequest = ({ KEY }) => ({
    type: RESTARANT_LIST_REQUEST,
    payload: {key:KEY}
})

export const fetchRestarantListSuccess = (json) => ({
    type: RESTARANT_LIST_SUCCESS,
    payload: json
})

export const fetchRestarantListFailure = (json) => ({
    type: RESTARANT_LIST_FAILURE,
    payload: json
})


export const fetchRestarantList = ({ URL, API_KEY, KEY }) => {
    return async (dispatch) => {
        dispatch(fetchRestarantListRequest({ KEY }));
        await axios.post(URL, { category_id: KEY }, {
            headers: {
                'Content-Type': 'application/json',
                'api_key': API_KEY
            }
        }).then((response) => {
            if (response.data.success) {
                dispatch(fetchRestarantListSuccess({ key: KEY, ...response.data }));
            } else {
                dispatch(fetchRestarantListFailure({ key: KEY, ...response.data }));
            }
        }).catch(error => {
            dispatch(fetchRestarantListFailure({ key: KEY, ...error }));
        });
    }
}


export const fetchBannerRequest = () => ({
    type: BANNER_REQUEST
})

export const fetchBannerSuccess = (json) => ({
    type: BANNER_SUCCESS,
    payload: json
})

export const fetchBannerFailure = (json) => ({
    type: BANNER_FAILURE,
    payload: json
})



export const fetchBanner = ({ URL, API_KEY }) => {
    return async (dispatch) => {
        dispatch(fetchBannerRequest());
        await axios.get(URL, {
            headers: {
                'Content-Type': 'application/json',
                'api_key': API_KEY
            }
        }).then((response) => {
            if (response.data.success) {
                dispatch(fetchBannerSuccess(response.data));
            } else {
                dispatch(fetchBannerFailure(response.data));
            }
        }).catch(error => {
            dispatch(fetchBannerFailure(error));
        });
    }
}



export const fetchCategoryRequest = () => ({
    type: CATEGORY_REQUEST
})


export const fetchCategorySuccess = (json) => ({
    type: CATEGORY_SUCCESS,
    payload: json
})

export const fetchCategoryFailure = (json) => ({
    type: CATEGORY_FAILURE,
    payload: json
})

export const fetchCategory = ({ URL, API_KEY }) => {
    return async (dispatch) => {
        dispatch(fetchCategoryRequest());
        await axios.get(URL, {
            headers: {
                'Content-Type': 'application/json',
                'api_key': API_KEY
            }
        }).then((response) => {
            if (response.data.success) {
                dispatch(fetchCategorySuccess(response.data));
            } else {
                dispatch(fetchCategoryFailure(response.data));
            }
        }).catch(error => {
            dispatch(fetchCategoryFailure(error));
        });
    }
}