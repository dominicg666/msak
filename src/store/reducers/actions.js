import AsyncStorage from '@react-native-community/async-storage';
import { GET_LANGUAGE, SET_LANGUAGE, SET_BASEPATH, IS_LOADING } from './actionType';

export const setLanguage = (json) => ({
    type: SET_LANGUAGE,
    payload: json
})
export const setBasePath = (json) => ({
    type: SET_BASEPATH,
    payload: json
})
export const isLoading = (json) => ({
    type: IS_LOADING,
    payload: json
})

export const isSelectedLanguage = (navigation) => {
    return async (dispatch) => {
        dispatch(isLoading(true));
        try {
            const value = await AsyncStorage.getItem('language');
            if (value !== null) {
                await dispatch(setLanguage(value));
                await dispatch(setBasePath(value));
                await dispatch(isLoading(false));
                await navigation.navigate('Main');
            } else {
                await dispatch(isLoading(false));
                navigation.navigate('Language');
            }
        } catch (e) {
            // error reading value
        }
    }
}

export const configureLanguage = (navigation, value) => {
    return async (dispatch) => {
        dispatch(isLoading(true));
        try {
            await AsyncStorage.setItem('language', value);
            await dispatch(setLanguage(value));
            await dispatch(setBasePath(value));
            await dispatch(isLoading(false));
            await navigation.navigate('Main');
        } catch (e) {
            // saving error
        }

    }
}

