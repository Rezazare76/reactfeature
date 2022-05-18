import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./Counter/Counter";
import { dark, light } from "./Theme/Theme";
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const curentTheme = useSelector((state) => state.theme.value);
  const changeTheme = useDispatch();
  return (
    <div
      className={`App ${curentTheme}-primary`}
      onClick={() =>
        curentTheme == "dark" ? changeTheme(light()) : changeTheme(dark())
      }
    >
      <div onClick={(e) => e.stopPropagation()}>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
