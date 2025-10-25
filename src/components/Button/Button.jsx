import "./Button.css";

const GenericButton = ({ texto, acao }) => {
  return (
    <button onClick={() => acao()} className="g-button" id="button">
      {texto}
    </button>
  );
};

export default GenericButton;
