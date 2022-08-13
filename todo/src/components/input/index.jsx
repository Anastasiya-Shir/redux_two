/* eslint-disable no-sequences */
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../store/actions';


function InputList() {

  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  const addTasks = () => {
    dispatch(addTask())
  }
  function showInput(event) {
    console.log(event.target.value);
  }
  return (
    <div>

      <input> </input>;
      <button onClick={showInput}> press</button>
    </div>
  )
}
export default InputList;
