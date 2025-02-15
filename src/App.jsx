
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {

const[data, setData]= useState([])

useEffect(() => {
  fetch("https://raw.githubusercontent.com/Vibencode-Solutions/mock-api/refs/heads/main/api.json")
  .then((response)=> response.json())
  .then((data)=>setData(data))
  .catch((error)=> console.log(error))
}, []);

const childData=(nodes)=>{
  return  nodes.map((node, index)=>(
    <li key={index}>
      {node.name}
      {node.child.length > 0 && <ul>{childData(node.child)}</ul>}
    </li>
  ));

};



  return (
    <div>
      <ul>{childData(data)}</ul>
    </div>
  )
}

export default App























































