import './button.scss'

const botton_type_classes ={
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({children, buttonType, ...inputProps}) => {
    return (
        <button className={`button-container ${botton_type_classes[buttonType]}`}{...inputProps}>
            {children}
        </button>
    )
}


export default Button;