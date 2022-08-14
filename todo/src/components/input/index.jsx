/* eslint-disable no-sequences */
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../store/actions';


import { useState } from "react";

function InputList() {
  const [inputValue, setInputValue] = useState("");
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  const inputState = useSelector(state => {
    return state.value;
  });
  const addTasks = () => {
    dispatch(addTask())
  }
  function showInput(event) {
    setInputValue(event.target.value);

  }

  // state = {
  //   task: '',
  // }
  // handleInputChange = ({ target: { value } }) => {
  //   this.setState({
  //     task: value,
  //   })
  // }

  return (
    <div>
      <form onSubmit={e => e.preventDefault()} >
        <input onChange={(e) => { setInputValue(e.target.value); }}  ></input>;
        <button onClick={function () {
          console.log({ inputState })
          dispatch(addTask(inputValue))
        }} > press</button>
      </form>
      {inputState}
    </div>
  )
}
export default InputList;
