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
          texto={"Completar"}
          acao={() => completarTarefa(tarefa.id)}
        ></GenericButton>
        <GenericButton
          texto={"Excluir"}
          acao={() => removeTarefa(tarefa.id)}
        ></GenericButton>
      </div>
    </div>
  );
};

export default Tarefa;
