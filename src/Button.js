
const Button = (props) => {
    return <button className="btn" style={{backgroundColor: props.color}} onClick={props.onOpenForm} > {props.text} </button>
}

export default Button