function todoReducer(state = { value: [] }, action) {
  switch (action.type) {
    case 'task/add':
      return { ...state, value: "hi" + state }

    case 'task/remove':
      return {}

    default:
      return state
  }
}

export { todoReducer };
