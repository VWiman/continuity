const Button = ({ type, icon, text, action }) => {
    return (
        <button type={type} onClick={() => action()}>{icon ? icon : text}</button>
    )
}

export default Button