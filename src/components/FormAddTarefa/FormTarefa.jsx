import React, { useState } from "react";
import "./FormTarefa.css";
import GenericButton from "../Button/Button";

const FormTarefa = ({ addTarefa }) => {
  const [text, setText] = useState("");
  const [tipo, setTipo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !tipo) return;

    addTarefa(text, tipo);

    setTipo("");
    setText("");
  };

  return (
    <div className="form-criar-Tarefa">
      <h2>Criar Tarefa</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="form-text"
          type="text"
          value={text}
          id="todo-input"
          placeholder="Informe a tarefa..."
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <label>
          <select
            className="form-select"
            required
            value={tipo}
            onChange={(e) => {
              setTipo(e.target.value);
            }}
          >
            <option value="">Selecione uma caregoria</option>
            <option value="Hobby">Hobby</option>
            <option value="Estudo">Estudo</option>
            <option value="Pessoal">Pessoal</option>
          </select>
        </label>
        <GenericButton texto={"Criar"} acao={() => {}}></GenericButton>
      </form>
    </div>
  );
};

export default FormTarefa;
