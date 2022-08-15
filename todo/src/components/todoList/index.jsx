
import React from "react";

import { useSelector } from "react-redux";

const List = () => {

  const tasks = useSelector(state => state.toDo.todos);

  return (
    <div className="task-list">

      {

        tasks?.map((task) => (

          <div key={task.id} task={task.title} >
            {task.title}

          </div>
        ))
      }
    </div>
  )
}

export default List;
