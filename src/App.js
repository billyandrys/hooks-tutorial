

import {useState} from 'react'


const App = ()=>{
  const [count, setCount] = useState(10)
  const [count2, setCount2] = useState(20)
  return (
    <>
      <button onClick={() => {
        setCount(e=>e+1)
        setCount2(i=>i+1)
      }}
      
    >+</button>
      <div>count : {count}</div>
      <div>count 2  : {count2}</div>
    </>
  )
}


export default App;
