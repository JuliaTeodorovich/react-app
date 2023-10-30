const ButtonModal = ({ color, text, onClick }) => {
  return (
    <button onClick={onClick} className={color}>
      {text}
    </button>
  );
};

export default ButtonModal;
