import React, { useState } from "react";

import { useDispatch } from 'react-redux';

import { addTask } from "../../store/actions";


function InputList() {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  function handleAddTask() {
    if (inputValue !== '') {
      console.log("hi")
      dispatch(addTask({
        title: inputValue
      }));
      setInputValue('');
    }

  }

  return (
    <div>
      <form onSubmit={e => e.preventDefault()} >
        <input onChange={handleInputChange}></input>;
        <button onClick={handleAddTask} > press
        </button>

      </form>

    </div>
  )
}
export default InputList;
