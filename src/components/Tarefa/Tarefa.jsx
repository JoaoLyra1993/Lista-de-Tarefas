const Tarefa = ({ tarefa, removeTarefa, completarTarefa }) => {
  return (
    <div
      className="tarefa"
      style={{ textDecoration: tarefa.isCompleted ? "line-through" : "" }}
    >
      <div className="conteudo-tarefa">
        <p>{tarefa.texto}</p>
        <p>({tarefa.tipo})</p>
      </div>
      <div>
        <button onClick={() => completarTarefa(tarefa.id)}>Completar</button>
        <button onClick={() => removeTarefa(tarefa.id)}>X</button>
      </div>
    </div>
  );
};

export default Tarefa;
