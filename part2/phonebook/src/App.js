import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Contacts from './components/Contacts'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import contactsService from './services/contacts'

const App = () => {

  useEffect(() => {
    contactsService
    .getAll()
    .then(initialContacts => setContacts(initialContacts))
  }, [])

  const [contacts, setContacts] = useState([])
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)
  const [isError, setIsError] = useState(false)

  const handleNameChange = (value) => {
    setName(value)
  }

  const handleNumberChange = (value) => {
    if(contacts.map(c => c.number).findIndex(element => element === value) === -1){
      setNumber(value) 
    } else {
      alert(`${value} is already added to phonebook.`)
      setNumber('')
    } 
  }

  const addContact = (e) => {
    e.preventDefault()
    const newContact = {
      name,
      number
    }
    const index = contacts.map(c => c.name).findIndex(element => element === name)
    const contact = contacts[index]
    if(index !== -1){
      if(window.confirm(`${name} is already added to phonebook, replace the old number with a new one?`)){
        contactsService
        .update(contact.id, {...contact, number})
        .then(returnedContact => {
          setContacts(contacts.map(c => c.id !== contact.id ? c : returnedContact))
          setTimeout(() => {
            setNotification(null)
          }, 5000)
          setNotification(`Updated ${returnedContact.name}`)
          setName('')
          setNumber('')
      })
      }
      
    } else {
      contactsService
      .create(newContact)
      .then(returnedContact => {
        setContacts(contacts.concat(returnedContact))
        setNotification(`Added ${returnedContact.name}`)
        setTimeout(() => {
          setNotification(null)
        }, 5000)
        setName('')
        setNumber('')
    })
    }
  }

  const removeContact = contact => {
    if(window.confirm(`Are you sure you want to delete ${contact.name}?`)) {
      contactsService
      .remove(contact.id)
      .catch(() => {
        setIsError(true)
        setNotification(`${contact.name} is already deleted from phonebook.`)
        setTimeout(() => {
          setIsError(false)
          setNotification(null)
        }, 5000)
      })
      setContacts(contacts.filter(c => c.id !== contact.id))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message = {notification} isError = {isError} />
      <Filter value = {filter} onChange = {setFilter}/>
      <h3>Add a new</h3>
      <PersonForm 
        name = {name} 
        number = {number} 
        nameChange = {handleNameChange} 
        numberChange = {handleNumberChange} 
        onSubmit = {addContact}
      />
      <h3>Numbers</h3>
      <Contacts contacts = {contacts} filter = {filter} onClick = {removeContact}/>
    </div>
  )
}

export default App
