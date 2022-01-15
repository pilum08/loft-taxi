import { cardDetails } from '../store/actions'
import { serverCardDetails } from '../api'
import { SAVE_CARD } from '../store/actions'

export const saveCardMiddleware = (store) => (next) => async (action) => {
    if (action.type === SAVE_CARD) {
        const {
            cardNumber,
            cardName,
            expiryDate,
            cvc,
            token
        } = action.payload;

        const success = await serverCardDetails({ 
            cardNumber,
            cardName,
            expiryDate,
            cvc,
            token
        });

        if (success) {
            store.dispatch(cardDetails({ 
                cardNumber,
                cardName,
                expiryDate,
                cvc
            }))
        }
    } else {
        next(action)
    }
}