import { useSelector } from 'react-redux';



function List() {


  const inputState = useSelector(state => {
    return state.value;
  });

  return (
    <div>
      {inputState}
    </div>
  )
}
export default List;
