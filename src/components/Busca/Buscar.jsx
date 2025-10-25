const Buscar = ({ busca, setPesquisa }) => {
  return (
    <div className="search">
      <h3>Pesquisar:</h3>
      <input
        type="text"
        value={busca}
        id=""
        onChange={(e) => setPesquisa(e.target.value)}
      />
    </div>
  );
};

export default Buscar;
