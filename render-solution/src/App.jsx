import { useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(1)

  console.log("rendered")
  const plusOne = () => {
    setCounter(counter + 1)
  }
  const timesTwo = () => {
    setCounter(counter * 2)
  }
  const secondPower = () => {
    setCounter(counter ** 2)
  }

  return (
    <div>
      <h2>Render solution - using React Hooks</h2>
      <p>Counter: {counter}</p>
      <button onClick={plusOne}>+1</button>
      <button onClick={timesTwo}>*2</button>
      <button onClick={secondPower}>^2</button>
    </div>
  )
}

export default App