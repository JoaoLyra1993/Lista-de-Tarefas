import "./Buscar.css";

const Buscar = ({ busca, setPesquisa }) => {
  return (
    <div className="search-container">
      <h3>Pesquisar:</h3>
      <input
        className="text-search"
        type="text"
        value={busca}
        id=""
        onChange={(e) => setPesquisa(e.target.value)}
      />
    </div>
  );
};

export default Buscar;
