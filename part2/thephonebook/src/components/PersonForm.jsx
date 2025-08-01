import { useState } from 'react'
import personsService from '../services/persons'

const PersonForm = ({persons, setPersons}) => {
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')

	const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

	const addNewPerson = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      number: newNumber
    }
    if(persons.some(p => p.name === person.name)) {
      if(window.confirm(`${person.name} is already added to the phonebook, replace the old number with a new one?`)) {
        const updatedPerson = {...persons.find(p => p.name === person.name), number: newNumber}
        personsService
          .updatePerson(updatedPerson.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.name !== person.name ? p : returnedPerson))
            setNewName('')
            setNewNumber('')
          })
    }
    return
  }
    personsService
      .createPerson(person)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  return (
    <form onSubmit={addNewPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
        <br />
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
