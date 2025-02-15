import { useState } from "react"


const App = () => {

let [counter, setCounter] = useState(15)

  const addCount =()=>{
    setCounter(counter+1)
    console.log(counter)
  }

  const remCount =()=>{
    setCounter(counter-1)
  }

  return (
    <div>
      <h1>Counter</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addCount} >Add Count</button>
      <button onClick={remCount}>Remove Count</button>
    </div>
  )
}

export default App
