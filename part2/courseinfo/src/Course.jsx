const Header = (props) => <h2>{props.course}</h2>

const Content = ({parts}) => (
  <div>
    {parts.map(part => <Part key={part.id} part={part} />)}
  </div>
)

const Part = ({part}) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Total = ({parts}) => {
  const exercises = parts.map(part => part.exercises)
  const total = exercises.reduce((sum, num) => sum + num, 0)
  return <strong>total of {total} exercises</strong>
}
  

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total
        parts={course.parts}
      />
    </div>
  )
}

export default Course