import Input from './Input'

const PersonForm = (props) => {
    return (
        <div>
            <form onSubmit = {(e) => props.onSubmit(e)} >
                <Input name = 'name' value = {props.name} onChange = {props.nameChange}/>
                <Input name = 'number' value = {props.number} onChange = {props.numberChange}/>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm
