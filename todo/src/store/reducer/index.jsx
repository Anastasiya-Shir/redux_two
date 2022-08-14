function todoReducer(state = ["1"], action, text) {
  switch (action.type) {
    case 'task/add':
      return { ...state, value: [action.payload, state.value] }

    case 'task/remove':
      return {}

    default:
      return state
  }
}

export { todoReducer };
