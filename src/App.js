import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state);

  function decrementAsync() {
    return dispatch => {
      setTimeout(() => {
        dispatch(decrement());
      }, 5000);
    };
  }

  return (
    <div className="maindiv">
      <div className="Label"> <h1> Counter </h1> </div>
      <div className="counter">  <h2> {count} </h2> </div>
      <div >
        <button className="Btn" onClick={() => dispatch(increment())}> + </button>
        <button className="Btn" onClick={() => dispatch(decrementAsync())}> - </button>
      </div>
    </div>
  );
};

export default App;
