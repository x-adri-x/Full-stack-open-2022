import Filter from './components/Filter'
import Countries from './components/Countries'
import Country from './components/Country'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => setCountries(response.data))
  }, [])


  return (
    <div>
      <Filter filter = {filter} onChange = {setFilter} />
      <Countries countries = {countries} filter = {filter} />
    </div>
  )
}

export default App
