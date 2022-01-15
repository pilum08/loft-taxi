import {CARD_DETAILS} from '../actions'

const initialState = {
    cardNumber: undefined,
    cardName: undefined,
    expiryDate: undefined,
    cvc: undefined
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CARD_DETAILS: {
            return {
                cardNumber: action.payload.cardNumber,
                cardName: action.payload.cardName,
                expiryDate: action.payload.expiryDate,
                cvc: action.payload.cvc
            }
        }
        default: {
            return state
        }
    }
}