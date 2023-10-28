import "./App.css"
import { useState } from "react";

function App() {

  const [counter, setCounter] = useState(5)


  const addValue = ()=>{
    if(counter < 20){
      setCounter(counter + 1);
    }
  }

  const decreaseValue = ()=>{
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Hello</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Increment</button>
      <br />
      <button onClick={decreaseValue}>Decrement</button>
    </>
  )
}

export default App
