import Part from './Part'

const Content = (props) => {
  return (
    <>
      <Part name={props.name1} exercises={props.exercises1} />
      <Part name={props.name2} exercises={props.exercises2} />
      <Part name={props.name3} exercises={props.exercises3} />
    </>
  )
}

export default Content