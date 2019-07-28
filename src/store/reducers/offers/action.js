import * as axios from 'axios';

import {
    OFFERS_LIST_REQUEST,
    OFFERS_LIST_SUCCESS,
    OFFERS_LIST_FAILURE,

    OFFERS_DETAILS_REQUEST,
    OFFERS_DETAILS_SUCCESS,
    OFFERS_DETAILS_FAILURE,
    OPEN_OFFER_DETALS
} from './actionType';

export const openOfferDetails = (json) => ({
    type: OPEN_OFFER_DETALS,
    payload: json
})


export const fetchOffersDetailsRequest = () => ({
    type: OFFERS_DETAILS_REQUEST
})

export const fetchOffersDetailsSuccess = (json) => ({
    type: OFFERS_DETAILS_SUCCESS,
    payload: json
})

export const fetchOffersDetailsFailure = (json) => ({
    type: OFFERS_DETAILS_FAILURE,
    payload: json
})


export const fetchOffersDetails = ({ URL, API_KEY, OFFER_ID }) => {
    return async (dispatch) => {
        dispatch(fetchOffersDetailsRequest());
        await axios.post(URL, { offer_id: OFFER_ID }, {
            headers: {
                'Content-Type': 'application/json',
                'api_key': API_KEY
            }
        }).then((response) => {
            if (response.data.success) {
                dispatch(fetchOffersDetailsSuccess(response.data));
            } else {
                dispatch(fetchOffersDetailsFailure(response.data));
            }
        }).catch(error => {
            dispatch(fetchOffersDetailsFailure(error));
        });
    }
}



export const fetchOffersListRequest = () => ({
    type: OFFERS_LIST_REQUEST
})

export const fetchOffersListSuccess = (json) => ({
    type: OFFERS_LIST_SUCCESS,
    payload: json
})

export const fetchOffersListFailure = (json) => ({
    type: OFFERS_LIST_FAILURE,
    payload: json
})


export const fetchOffersList = ({ URL, API_KEY }) => {
    return async (dispatch) => {
        dispatch(fetchOffersListRequest());
        await axios.get(URL, {
            headers: {
                'Content-Type': 'application/json',
                'api_key': API_KEY
            }
        }).then((response) => {
            if (response.data.success) {
                dispatch(fetchOffersListSuccess(response.data));
            } else {
                dispatch(fetchOffersListFailure(response.data));
            }
        }).catch(error => {
            dispatch(fetchOffersListFailure(error));
        });
    }
}