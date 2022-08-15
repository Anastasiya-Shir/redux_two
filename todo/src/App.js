import './App.css';
import InputList from './components/input/index';
import List from './components/todoList/index'

// import { useDispatch, useSelector } from 'react-redux';
// import { addTask, } from './store/actions';
function App() {


  return (
    <div className="App">
      <InputList />
      <List />
    </div>
  );
}

export default App;
