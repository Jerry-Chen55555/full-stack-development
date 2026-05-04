const App = () => {
  // jscode
  let counter = 0

  const increaseCounter = () => {
    console.log("yes.")
    counter++
    console.log("Updated Counter: ", counter)
  }

  return (
    <div>
      <h2>Render problem</h2>
      <p>Counter: {counter}</p>
      <button onClick={increaseCounter}>Increment</button>
    </div>
  )
}

export default App