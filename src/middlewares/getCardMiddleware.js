import { cardDetails } from '../store/actions'
import { serverGetCard } from '../api'
import { GET_CARD } from '../store/actions'

export const getCardMiddleware = (store) => (next) => async (action) => {
    if (action.type === GET_CARD) {
        const { token } = action.payload;
        const data = await serverGetCard(token);
        if (data.cardNumber) {
            store.dispatch(cardDetails(data))
        }
    } else {
        next(action)
    }
}