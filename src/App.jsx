import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incCount = () => {
    setCount(prev => prev+1)
  }
  const decCount = () => {
    if(count <=0) return setCount(0);
    setCount(prev => prev-1)
  }

  const addSteps =(e) => {
    setCount((prev) => prev + Number(e.target.value))
  }


  return (
    <>
     <h1>Counter</h1>
     <div>
     <label>Counter value {count}</label>
     </div>
      <div className="card">
        
        <label >add steps</label>
        <input type="text" onChange={addSteps} />

       
        <button onClick={incCount}>
          +
        </button>
        <button onClick={decCount}>
          -
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more and commit
      </p>
    </>
  )
}

export default App
