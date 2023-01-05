const AiBtn = ({ text, isActive, newButton }) => {
  return (
    <button
      className={`${isActive ? "active" : ""}`}
      onClick={() => newButton(text)}
    >
      {text}
    </button>
  );
};

export default AiBtn;
