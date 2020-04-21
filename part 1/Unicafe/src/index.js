import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Stat =(props)=>{
  return(
    <table>
      <tbody>
      <tr>
    <td> {props.text} </td> 
    <td>{props.value}</td>
    </tr>  
    </tbody>
    </table>
  )
}

const Stats =(props)=>{
  if(props.total===0)
  {
    return(
      <div>
        <p>No Feedback to give</p> 
      </div>
    )
  }
  const avg= props.total/100;
  const positive=(props.good/props.total)*100
  return(
    <div>
    <h2>{props.name}</h2>
      <Stat text='good' value={props.good}/>
      <Stat text='neutral' value={props.neutral}/>
      <Stat text='bad' value={props.bad}/>
      <Stat text='all' value ={props.total}/>
      <Stat text='average' value ={avg}/>
      <Stat text='positive' value ={positive}/>
    </div>
  )
}
const Button =({handleClick,text})=>{
  return(
    <button onClick={handleClick} > {text} </button>
  )
}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
const total =good+neutral+bad;
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={()=>setGood(good+1)} text='good'/>
      <Button handleClick={()=>setNeutral(neutral+1)} text='neutral'/>
      <Button handleClick={()=>setBad(bad+1)} text='bad'/>
      <Stats name='Statistics' good={good} bad={bad} neutral={neutral} total={total}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)