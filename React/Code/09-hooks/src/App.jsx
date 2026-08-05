import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  function increaseNum(){
    setCount(count + 1)
  }
  function decreaseNum(){
    setCount(count - 1)
  }
  function Jump5(){
    setCount(count+5)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={Jump5}>Increase by 5</button>
    </div>
  )
}

export default App
