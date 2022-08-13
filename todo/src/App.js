import './App.css';
import InputList from './components/input/index';
import List from './components/todoList'

// import { useDispatch, useSelector } from 'react-redux';
// import { addTask, } from './store/actions';
function App() {

  // const store = useSelector((store) => store);
  // const dispatch = useDispatch();
  // const inputState = useSelector(state => {
  //   return state.value;
  // })
  return (
    <div className="App">
      <InputList />
      <List />
    </div>
  );
}

export default App;
