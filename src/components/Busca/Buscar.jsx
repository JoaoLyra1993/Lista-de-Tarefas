const Buscar = ({ busca, setPesquisa }) => {
  return (
    <div className="search">
      <h2>Pesquisar:</h2>
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
