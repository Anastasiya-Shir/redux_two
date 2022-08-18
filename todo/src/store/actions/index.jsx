export const addTask = (task) => ({
  type: 'task/addTask',
  payload: task
})
export const removeTask = (id) => ({
  type: 'task/removeTask',
  payload: { id }
})
