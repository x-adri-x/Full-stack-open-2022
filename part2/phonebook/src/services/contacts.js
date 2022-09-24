import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    return (
    axios({
        method: 'get',
        baseURL
    })
    .then(response => response.data))
    .catch(error => handleError(error))
}

const create = newObject => {
    return(
        axios({
            method: 'post',
            baseURL,
            data: newObject
        })
        .then(response => response.data)
        .catch(error => handleError(error))
    )
}

const update = (id, newObject) => {
    return(
        axios({
            method: 'put',
            baseURL,
            url: `/${id}`,
            data: newObject
        })
        .then(response => response.data)
        .catch(error => handleError(error))
    )
}

const remove = id => {
    return(
        axios({
            method: 'delete',
            baseURL,
            url: `/${id}`
        })
    )
}

const handleError = error => {
    if(error.response) console.log(`The server responded ${error.response.status}`)
    else if (error.request) console.log(`No response was received: ${error.request}`)
    else console.log(`An unexpected error occured: ${error.message}`)
}

export default {
    getAll,
    create,
    update,
    remove
}