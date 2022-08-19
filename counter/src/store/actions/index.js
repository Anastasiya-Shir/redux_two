export const decrementCount = (payload) => (
  {
    type: 'counter/decrement',
    payload
  }
)

export const incrementCount = (payload) => ({
  type: 'counter/increment',
  payload
}

)
