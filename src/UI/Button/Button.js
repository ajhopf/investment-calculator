const Button = props => {
  return (
    <button type={props.type} onClick={props.onClick} className="btn">
      { props.children }
    </button>
  )
}