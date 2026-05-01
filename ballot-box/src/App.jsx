import republican from "./republican.png";
import democratic from "./democratic.png";
import american from "./american.png";

import { useState } from "react";

import "./App.css";

const Ballot = ({ votes, incrementDemocrats, incrementRepublicans, incrementIndependent }) => {
  return (
    <div className="party-container">
      <div className="party">
        <h2>Democrats</h2>
        <div className="box blue">
          <img src={democratic} alt="Democrats" className="party-image" />
          <br />
          <button className="vote-button" onClick={incrementDemocrats}>Vote</button>
          <p className="vote-count">Vote Count: {votes.democrats}</p>
        </div>
      </div>

      <div className="party">
        <h2>Republicans</h2>
        <div className="box red">
          <img src={republican} alt="Republicans" className="party-image" />
          <br />
          <button className="vote-button" onClick={incrementRepublicans}>Vote</button>
          <p className="vote-count">Vote Count: {votes.republicans}</p>
        </div>
      </div>

      <div className="party">
        <h2>Independent</h2>
        <div className="box yellow">
          <img src={american} alt="Independents" className="party-image" />
          <br />
          <button className="vote-button" onClick={incrementIndependent}>Vote</button>
          <p className="vote-count">Vote Count: {votes.independent}</p>
        </div>
      </div>
    </div>
  )
}

const ElectionResults = ({ votes }) => {
  return (
    <div className="vote-statistics">
      <h2>Vote Statistics</h2>
      {votes.democrats + votes.republicans + votes.independent !== 0 ? (
        <>
          <p>Democrats: {votes.democrats} ({(votes.democrats / (votes.democrats + votes.republicans + votes.independent) * 100).toFixed(2)}%)</p>
          <p>Republicans: {votes.republicans} ({(votes.republicans / (votes.democrats + votes.republicans + votes.independent) * 100).toFixed(2)}%)</p>
          <p>Independent: {votes.independent} ({(votes.independent / (votes.democrats + votes.republicans + votes.independent) * 100).toFixed(2)}%)</p>
          <p>Total Votes: {votes.democrats + votes.republicans + votes.independent}</p>
        </>
      ) : (
        <p style={{color:"red"}}>Currently, the system has not received any votes yet.</p>
      )

      }
      

    </div>
  )

}

const App = () => {
  const [votes, setVotes] = useState({ democrats: 0, republicans: 0, independent: 0 })

  const incrementDemocrats = () => { setVotes({ ...votes, democrats: votes.democrats + 1 }) }
  const incrementRepublicans = () => { setVotes({ ...votes, republicans: votes.republicans + 1 }) }
  const incrementIndependent = () => { setVotes({ ...votes, independent: votes.independent + 1 }) }

  return (
    <>
      <Ballot votes={votes} incrementDemocrats={incrementDemocrats} incrementRepublicans={incrementRepublicans} incrementIndependent={incrementIndependent} />
      <ElectionResults votes={votes} />
    </>

  );
};

export default App;