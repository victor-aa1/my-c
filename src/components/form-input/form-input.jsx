const FormInput = ({ label, ...inputProps}) => {
    
    return(
        <>
            <label>{label} </label>
            <input 
            {...inputProps}
            />
        </>
    );
}

export default FormInput;