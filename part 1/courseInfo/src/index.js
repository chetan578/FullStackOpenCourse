import React from 'react'
import ReactDOM from 'react-dom'

const Header=(props)=>{
  return (
    <div>
      <h1> {props.course}</h1>
    </div>
  )
}
const Part1=(props)=>{
  return(
    <div>
          <p>{props.p1} has {props.e1} exercises </p>
    </div>
  )
}
const Part2=(props)=>{
  return(
    <div>
      <p>{props.p2} has {props.e2} exercises</p>
    </div>
  )
}
const Part3=(props)=>{
  return(
    <div>
          <p>{props.p3} has {props.e3} exercises </p>
    </div>
  )
}
const Content= (props)=>{ 
  return(
    <div>
      <Part1 p1={props.parts[0].name} e1={props.parts[0].exercises} />
      <Part2 p2={props.parts[1].name} e2={props.parts[1].exercises}/>
      <Part3 p3={props.parts[2].name} e3={props.parts[2].exercises}/>
  </div>
  )
}
const Total =(props)=>{
  return(
    <p>Total number of exercises are {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))