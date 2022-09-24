const Filter = (props) => {
    return (
        <div>
            filter shown with <input value = {props.value} onChange = {(e) => props.onChange(e.target.value)}/>
        </div>
    )
}

export default Filter