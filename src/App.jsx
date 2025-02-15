
import { useState } from 'react'

const App = () => {

let [count , setCount] = useState(0)

const addCount = ()=>{
  if (count != 20)
    {setCount(count+1)} 
  else{count ==20}
}

const remCount =()=>{
  if(count != 0)
    {setCount(count-1)}
  else{count ==0} 
}

  return (
    <>
      <div>Counter App {count}</div>
      <button onClick={addCount}>Add</button>
      <button onClick={remCount}>Remove</button>
    </>
  )
}

export default App