const Contact = ({contact, onClick}) => {
    return (
        <div>
            {contact.name} {contact.number} <button onClick = {() => onClick(contact)}>delete</button>
        </div>
    )
}

export default Contact