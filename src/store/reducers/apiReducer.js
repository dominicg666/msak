import { GET_LANGUAGE, SET_LANGUAGE, SET_BASEPATH, IS_LOADING } from './actionType';

var initialState = {
    basepath_normal: "http://13.127.68.52/kasm/index.php/",
    base_url: null,
    languages: [
        { value: "en", name: "English" },
        { value: "ar", name: "Arabic" }
    ],
    selectedLanguage: null,
    isSelectedLanguage: false,
    isLoading: false

}

const ApiReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return { ...state, selectedLanguage: action.payload, isSelectedLanguage: true };
        case SET_BASEPATH:
            let base_url = state.basepath_normal + action.payload;
            return { ...state, base_url: base_url }

        case IS_LOADING:
            return { ...state, isLoading: action.payload }
        default:
            return state;
    }
}
export default ApiReducer; 