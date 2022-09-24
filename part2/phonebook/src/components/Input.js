const Input = (props) => {
   
    return(
        <div>
            {props.name}: <input  
            type = 'text' 
            onChange = {(e) => {props.onChange(e.target.value)}} 
            value = {props.value}
            />
        </div>
    )
}

export default Input