import React, { useEffect, useState } from "react";

function App() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState('');

  const sum = () => {
    const firstNumberInt = parseInt(firstNumber)
    const secondNumberInt = parseInt(secondNumber)

    setResult(firstNumberInt + secondNumberInt)
    
  }

  useEffect(()=>{
    console.log('value:', firstNumber)
  },[firstNumber])

  return (
    <>
      <div className="App">
        <p>First Number </p>
        <input type="text" value={firstNumber} onChange={e => setFirstNumber (e.target.value)} />

        <p>Second Number</p>
        <input type="text" value={secondNumber} onChange={e => setSecondNumber (e.target.value)} />

        <br/>
        <button onClick={sum}>Sum</button>
        <p><strong>Result: {result} </strong></p>

      </div>
    </>
  );
}

export default App;
