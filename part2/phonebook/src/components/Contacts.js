import Contact from './Contact'

const Contacts = (props) => {
    if(props.filter === '') {
      return (
        props.contacts.map(contact =>  <Contact key = {contact.id} contact = {contact} onClick = {props.onClick}/>)
      )
    } else {
      const filtered = props.contacts.filter(contact => 
        (contact.name.toLowerCase()).includes(props.filter.toLowerCase()))
      return (
        filtered.map(contact => <Contact key = {contact.id} contact = {contact} onClick = {props.onClick}/>)
      )
    }
  }

  export default Contacts