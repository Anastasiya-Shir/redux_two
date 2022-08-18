
import React from "react";

import { useSelector, useDispatch } from "react-redux";


import { removeTask } from "../../store/actions";

const List = () => {

  const tasks = useSelector(state => state.toDo.todos);

  const dispatch = useDispatch();
  const handleRemoveTask = (id) => () => {
    dispatch(removeTask(id));
  }

  return (
    <div className="task-list">
      {
        tasks?.map((task) => (

          <div key={task.id} task={task.title} >
            <button onClick={handleRemoveTask(task.id)}>remove</button>
            {task.title}

          </div>
        ))
      }
    </div>
  )
}

export default List;
