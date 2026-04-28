import { useState } from "react"

const Counter = ({counter}) => {
  return (
    <>
      <p>Counter: {counter}</p>
    </>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)

  // no need for these silly functions.
  // const plusOne = () => {
  //   setCounter(counter + 1)
  // }
  // const updateCounter = (count) => {
  //   setCounter(counter + count)
  // }
  // const reset = () => {
  //   setCounter(0)
  // }

  return (
    <div>
      <h2>Render solution - using React Hooks</h2>
      <Counter counter={counter} />
      <button onClick={() => {setCounter(counter+5)}}>+5</button>
      <button onClick={() => {setCounter(counter+1)}}>+1</button>
      <button onClick={() => setCounter(counter-1)}>-1</button>
      <button onClick={() => setCounter(counter-5)}>-5</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  )
}

export default App