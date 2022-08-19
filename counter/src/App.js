import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { decrementCount, incrementCount } from './store/actions';

function App() {
  const store = useSelector((store) => store);

  const dispatch = useDispatch();

  const counterValue = useSelector(state => state.value);

  const plus = () => {
    dispatch(incrementCount())
  };

  const minus = () => {
    dispatch(decrementCount())
  };


  return (
    <div className="App">
      {counterValue}
      <button onClick={plus}> plus</button>
      <button onClick={minus}>minus</button>
    </div>
  );
}

export default App;
