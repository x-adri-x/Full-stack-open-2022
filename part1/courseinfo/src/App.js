import React from "react"

const Header = ({title}) =>  <h1>{title}</h1>
const Part = ({part, exercise}) => <p>{part} {exercise}</p>

const Content = (props) => {
  
  return(
    <div>
      <Part part = {props.parts[0].name}  exercise = {props.parts[0].exercises} />
      <Part part = {props.parts[1].name}  exercise = {props.parts[1].exercises} />
      <Part part = {props.parts[2].name}  exercise = {props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  
  const sum = props.sum[0].exercises + props.sum[1].exercises + props.sum[2].exercises
  return(
    <p>Number of exercises {sum}</p>
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
      <Header title = {course.name} />
      <Content 
      parts = {course.parts}
      />
      <Total sum = {course.parts} />
    </div>
  )
}

export default App;
