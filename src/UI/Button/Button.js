const MyButton = props => {
  return (
    <button type={props.type} onClick={props.onClick} className={ props.className } style={{color: "white"}}>
      { props.children }
    </button>
  )
}

export default MyButton;