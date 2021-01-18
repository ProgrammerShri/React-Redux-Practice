
import { useSelector, useDispatch } from "react-redux";


const App = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state)
    
 
  
    const increment = () => {
      return {
        type: "INC",
      };
    };
  
    const decrement = () => {
      return {
        type: "DEC",
      };
    };
  
    return (
      <>
        <h1> Counter </h1>
        <button onClick={() => dispatch(increment())}> + </button>
        <h2> {count} </h2>
        <button onClick={() => dispatch(decrement())}> - </button>
      </>
    );
  };

  const reducer = (state = 0, action) => {
    
      console.log(action.type)
    switch (action.type) {
      case "INC":
        return state + 1;

      case "DEC":
        return state - 1;

      default:
        return state;
    }
  };
  export { App,reducer};