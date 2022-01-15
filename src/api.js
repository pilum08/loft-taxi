export const serverLogIn = async (email, password) => {
  return fetch(
    `https://loft-taxi.glitch.me/auth`,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password}),
    }
  ).then(res => res.json()).then(data => data.success)
}

export const serverCardDetails = async (cardNumber, expiryDate, cardName, cvc, token) => {
  return fetch(`https://loft-taxi.glitch.me/card`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ cardNumber, expiryDate, cardName, cvc, token }),
  })
    .then((res) => res.json())
    .then((data) => data.success);
}

export const serverGetCard = async (token) => {
  return fetch(
      `https://loft-taxi.glitch.me/card?token=${token}`
  )
  .then(response => response.json());
}
