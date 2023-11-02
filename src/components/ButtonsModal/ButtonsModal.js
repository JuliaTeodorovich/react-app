const ButtonModal = ({ color, text, onClick, type }) => {
  return (
    <button onClick={onClick} className={color} type={type}>
      {text}
    </button>
  );
};

export default ButtonModal;
