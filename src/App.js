/* eslint-disable react/jsx-no-comment-textnodes */
// import { useReducer, useContext } from "react";
// import CounterContext from "./CounterContext";
import Display from "./components/Display";
import Button from "./components/Button";

// const counterReducer = (state, action) => {
//   switch (action.type) {
//     case "INC":
//       return state + 1;
//     case "DEC":
//       return state - 1;
//     case "ZERO":
//       return 0;
//     default:
//       return state;
//   }
// };

// const Display = () => {
//   const [counter, dispatch] = useContext(CounterContext);
//   return <div>{counter}</div>;
// };

// const Button = ({ type, label }) => {
//   const [counter, dispatch] = useContext(CounterContext);
//   return <button onClick={() => dispatch({ type })}>{label}</button>;
// };

const App = () => {
  // const [counter, counterDispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      {/* // <div>{counter}</div> */}
      {/* // <CounterContext.Provider value={[counter, counterDispatch]}> */}
      <Display />
      <div>
        {/* <button onClick={() => counterDispatch({ type: "INC" })}>+</button>
        <button onClick={() => counterDispatch({ type: "DEC" })}>-</button>
        <button onClick={() => counterDispatch({ type: "ZERO" })}>0</button> */}
        {/* <Button dispatch={counterDispatch} type="INC" label="+" />
        <Button dispatch={counterDispatch} type="DEC" label="-" />
        <Button dispatch={counterDispatch} type="ZERO" label="0" /> */}
        <Button type="INC" label="+" />
        <Button type="DEC" label="-" />
        <Button type="ZERO" label="0" />
      </div>
      {/* // </CounterContext.Provider> */}
    </div>
  );
};

export default App;
