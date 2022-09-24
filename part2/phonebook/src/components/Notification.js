const Notification = ({message, isError}) => {
    const notificationStyle = {
        border: '3px solid hotpink',
        fontWeight: '500',
        fontSize: 16,
        padding: '10px',
        backgroundColor: 'lavenderblush'
    }

    const errorStyle = {
        border: '3px solid red',
        fontWeight: '500',
        fontSize: 16,
        padding: '10px',
        backgroundColor: 'gray',
        color: 'red'
    }

    if(message === null) {
        return null
    }
    return <p style = {isError ? errorStyle : notificationStyle}>{message}</p>
}

export default Notification