import Countries from './components/countries'
import {useState, useEffect} from 'react'
import countriesServices from './services/countries'

const App = () => {
  const [countries, setCountries] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    countriesServices
      .getAll()
      .then(allCountries =>
        setCountries(allCountries)
      )
  }, [])

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  if(countries === null) {
    return null
  }

  const countriesToShow = countries.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      find countries: <input value={search} onChange={handleChange} /> 
      <br />
      <Countries countriesToShow={countriesToShow} setSearch={setSearch} />
    </div>
  )
}

export default App