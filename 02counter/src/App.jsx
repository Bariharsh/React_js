import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0); 

  const addValue = () => {
    if(counter == 20){
      alert("You have reached the limit!");
    }
    setCounter(counter + 1);
  }

  const removeValue = () => {
    if(counter == 0){
      alert("You have reached the minimum!");
    }
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Hello World!</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter + 1}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App;
