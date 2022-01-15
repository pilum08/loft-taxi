export const LOG_IN = "LOG_IN"
export const LOG_OUT = "LOG_OUT"
export const AUTHENTICATE = "AUTHENTICATE"
export const SAVE_CARD = 'SAVE_CARD'
export const GET_CARD = 'GET_CARD'
export const CARD_DETAILS = 'CARD_DETAILS'

export const logIn = (payload) => ({ type: LOG_IN, payload });
export const logOut = () => ({ type: LOG_OUT });
export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
})

export const cardDetails = (data) => ({
  type: CARD_DETAILS,
  payload: {
      cardNumber: data.cardNumber,
      cardName: data.cardName,
      cvc: data.cvc,
      expiryDate: data.expiryDate
  }
})

export const saveCard = (cardNumber, cardName, expiryDate, cvc) => ({
  type: SAVE_CARD,
  payload: {
      cardNumber,
      cardName,
      expiryDate,
      cvc,
      token: 'AUTH_TOKEN' 
  }
})

export const getCard = () => ({
  type: GET_CARD,
  payload: {
      token: 'AUTH_TOKEN'
  }
})




