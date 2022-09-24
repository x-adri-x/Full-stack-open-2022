const Filter = ({filter, onChange}) => {
    
    return(
        <div>
            find countries <input value = {filter} onChange = {(e) => onChange(e.target.value)} />
        </div>
    )
}

export default Filter