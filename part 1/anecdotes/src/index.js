import React,{useState} from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [array,setArray]=useState([0,0,0,0,0,0])
  let i = array.indexOf(Math.max(...array));
  const generateRandomNum=()=>{
    let ans=Math.floor(Math.random()*6)
    console.log(ans)
    setSelected(ans)
  }
  const incrementVote=()=>{
    const copy=[...array]
    copy[selected]+=1
    setArray(copy)
    console.log(array)
  }
  return (
    <div>
      <h1>Anecdote of the day </h1>
      <p>{props.anecdotes[selected]} </p>
      <p>has {array[selected]} votes </p>
      <button onClick={generateRandomNum} >next anecdote</button>
     <button onClick={incrementVote}>vote </button>
     <h1>Anecdote with most Votes </h1>
     <p>{props.anecdotes[i]} </p>
     <p> has {array[i]} votes </p>  
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)