import GenericButton from "../Button/Button";
import "./Tarefa.css";

const Tarefa = ({ tarefa, removeTarefa, completarTarefa }) => {
  return (
    <div>
      <div
        className="todo-card"
        style={{ textDecoration: tarefa.isCompleted ? "line-through" : "" }}
      >
        <div className="todo-item">
          <span className="span-type">Tarefa: </span>
          <span className="span-item">{tarefa.texto}</span>
        </div>

        <div className="todo-item">
          <span className="span-type">Tipo: </span>
          <span className="span-item">{tarefa.tipo}</span>
        </div>
      </div>
      <div className="button-container">
        <GenericButton
          onClick={() => completarTarefa(tarefa.id)}
          texto={"Completar"}
        ></GenericButton>
        <GenericButton
          onClick={() => removeTarefa(tarefa.id)}
          texto={"Excluir"}
        ></GenericButton>
      </div>
    </div>
  );
};

export default Tarefa;
