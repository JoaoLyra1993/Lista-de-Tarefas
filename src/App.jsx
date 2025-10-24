import { useState } from "react";
import "./App.css";
import Tarefa from "./components/Tarefa/Tarefa";
import FormTarefa from "./components/FormAddTarefa/FormTarefa";
import Buscar from "./components/Busca/Buscar";

function App() {
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      texto: "Estudar programação",
      tipo: "Estudo",
      isCompleted: false,
    },

    {
      id: 2,
      texto: "Academia",
      tipo: "Pessoal",
      isCompleted: false,
    },

    {
      id: 3,
      texto: "RPG",
      tipo: "Hobby",
      isCompleted: false,
    },
  ]);

  const addTarefa = (texto, tipo) => {
    const novasTarefas = [
      ...tarefas,
      {
        id: Math.floor(Math.random() * 500),
        texto,
        tipo,
        isCompleted: false,
      },
    ];

    setTarefas(novasTarefas);
  };

  const [pesquisa, setPesquisa] = useState("");

  const removeTarefa = (id) => {
    const listaTarefas = [...tarefas];
    const tarefasFiltradas = listaTarefas.filter((tarefa) =>
      tarefa.id !== id ? tarefa : null
    );
    setTarefas(tarefasFiltradas);
  };

  const completarTarefa = (id) => {
    const listaTarefas = [...tarefas];
    listaTarefas.map((tarefa) =>
      tarefa.id === id ? (tarefa.isCompleted = !tarefa.isCompleted) : tarefa
    );
    setTarefas(listaTarefas);
  };

  return (
    <>
      <main className="app">
        <h1>Lista de tarefas</h1>
        <Buscar pesquisa={pesquisa} setPesquisa={setPesquisa} />
        <div className="lista-tarefas">
          {tarefas
            .filter((tarefas) =>
              tarefas.texto.toLowerCase().includes(pesquisa.toLowerCase())
            )
            .map((tarefas) => (
              <Tarefa
                key={tarefas.id}
                tarefa={tarefas}
                removeTarefa={removeTarefa}
                completarTarefa={completarTarefa}
              />
            ))}
        </div>

        <FormTarefa addTarefa={addTarefa} />
      </main>
    </>
  );
}

export default App;
