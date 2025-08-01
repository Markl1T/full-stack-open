import { useEffect, useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import personsService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState({
    message: null,
    type: ''
  })

  const hook = () => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }

  useEffect(hook, [])

  const handleDelete = id => {
    const person = persons.find(p => p.id === id)
		if(window.confirm(`Delete ${person.name} ?`)) {
			personsService
				.deletePerson(id)
				.then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
        .catch(error => {
          setNotification({
            message: `Information of '${person.name}' has already been removed from server`,
            type: 'error'
          })
          setTimeout(() => {
            setNotification({
              message: null,
              type: ''
            })
          }, 3000)
      })
		}
	}

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const personsToShow = persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} setNotification={setNotification} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} handleDelete={handleDelete} />
    </div>
  )
}

export default App