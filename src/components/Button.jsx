function Button(props) {
  const { theme, click, label } = props;
  return (
    <button type="button" className={'btn ' + theme} onClick={click}>
      {label}
    </button>
  );
}

export default Button;
