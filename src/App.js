import { useState } from 'react';
import './App.css';

function App() {
const [count, setCount] = useState(0)


  return (
    <div>
<h1>{count}</h1>
<button onClick={()=>{
  setCount(count+1)
}} >add</button>


<button onClick={()=>{
  setCount(count-1)
}}>subtract</button>

<button onClick={() =>{
setCount(count-count)
  
}}> reset</button>
    </div>
  );
}

export default App;
