import { useState } from "react"


const App = () => {
  // const [yCount, setY] = useState(0)
  // const [nCount, setN] = useState(0)
  const [recs, setRecs] = useState({yes: 0, no: 0})
  const [history, setHistory] = useState([])

  const increaseYes = () => {
    // do not mutate the state
    // always copy to a new object
    // use a spread operator with ...
    setRecs({...recs, yes: recs.yes + 1})
    setHistory([...history, "Y"])
  }
  const increaseNo = () => {
    setRecs({...recs, no: recs.no + 1})
    // setHistory([...history, "N"])
    setHistory(history.concat("N"))
  }

  // const example = {name: "John", dob: "1987"}

  return (
    <div>
      <h2>Recommendation App</h2>
      <p>Do you recommend this software</p>
      <button onClick={increaseYes}>Yes</button>
      <button onClick={increaseNo}>No</button>
      {history.length !== 0  && (<p>Yes: {recs.yes} - No: {recs.no}</p>)}
      {history.length === 0 ? <p>No Recommendation Yet</p> : <p>History: {history}</p>}
    </div>
  )
}

export default App