let numberId = 0;//for remive
const intialState = {
  todos: []
}
function todoReducer(state = intialState, action) {
  switch (action.type) {
    case 'task/addTask':
      return {
        ...state,
        todos: [...state.todos, {
          id: ++numberId,
          title: action.payload.title,
          completed: false,
        }]
      }


    case 'task/removeTask':
      return {
        ...state,
        todos: state.todos.filter(task => task.id !== action.payload.id)
      }

    default:
      return state;
  }
}


export { todoReducer };
