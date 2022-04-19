import React, { useState } from "react";
import useStore from "./sumReducer";

function ReducerHook() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [store, dispatch] = useStore()

  const sum = () => {
    const firstNumberInt = parseInt(firstNumber)
    const secondNumberInt = parseInt(secondNumber)

    console.log('dispatch action');
    dispatch({
      type: 'SUM',
      payload: firstNumberInt + secondNumberInt
    })
    
  }

  const subtraction = () => {
    const firstNumberInt = parseInt(firstNumber)
    const secondNumberInt = parseInt(secondNumber)

    console.log('dispatch action');
    dispatch({
      type: 'SUBTRACTION',
      payload: firstNumberInt - secondNumberInt
    })
    
  }


  return (
    <>
      <div className="App">
        <p>First Number </p>
        <input type="text" value={firstNumber} onChange={e => setFirstNumber (e.target.value)} />

        <p>Second Number</p>
        <input type="text" value={secondNumber} onChange={e => setSecondNumber (e.target.value)} />

        <br/>
        <button onClick={sum}>Sum</button>
        <button onClick={subtraction}>Subtraction</button>
        <p><strong>Result: {store.result} </strong></p>

      </div>
    </>
  );
}

export default ReducerHook;
