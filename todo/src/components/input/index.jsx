import React, { useState } from "react";

import { useDispatch } from 'react-redux';

import { addTask } from "../../store/actions";


function InputList() {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <form onSubmit={e => e.preventDefault()} >
        <input onChange={handleInputChange}></input>;
        <button onClick={function () {
          if (inputValue !== '') {
            console.log("hi")
            dispatch(addTask({
              title: inputValue
            }));
            setInputValue('');
          }

        }} > press
        </button>

      </form>

    </div>
  )
}
export default InputList;
