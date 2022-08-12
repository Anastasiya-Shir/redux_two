function todoReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/add':
      return {}

    case 'counter/remove':
      return {}

    default:
      return state
  }
}

export { todoReducer };
