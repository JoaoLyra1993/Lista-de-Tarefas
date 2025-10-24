import React, { useState } from "react";

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
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          id="tarefa-input"
          placeholder="Informe a tarefa..."
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <label>
          <select
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
        <button>Incluir</button>
      </form>
    </div>
  );
};

export default FormTarefa;
