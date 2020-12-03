import {LOAD_CURRENCY, CHANGE_CURRENCY} from '../actions/exchanger';

const initialState = {
    currency: null,
    typeCurrency: ''
}

const store = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_CURRENCY:
            return {
                ...state,
                currency: action.payload
            }
        case CHANGE_CURRENCY:
            return {
                ...state,
                typeCurrency: action.payload
            }    
        default: 
            return state
    }
}

export default store;