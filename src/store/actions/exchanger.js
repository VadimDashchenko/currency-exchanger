export const LOAD_CURRENCY = 'LOAD_CURRENCY';
export const CHANGE_CURRENCY = 'CHANGE_CURRENCY';

export const loadCurrency = payload => ({
    type: LOAD_CURRENCY,
    payload
})

export const changeCurrency = payload => ({
    type: CHANGE_CURRENCY, 
    payload
})