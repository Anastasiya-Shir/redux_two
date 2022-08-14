import { useSelector } from 'react-redux';



function List() {


  const inputState = useSelector(state => {
    return state.value;
  });

  return (
    <div>
      {inputState}
      {/* <ul>
        {
          todos.map(
            todo => <li key={todo.id}>
              <span> {todo.text}</span>
            </li>
          )
        }
      </ul> */}
    </div>
  )
}
export default List;
