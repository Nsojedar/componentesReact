const Boton = ({ texto, onClick }) => (
  <button type="button" className="btn btn-primary" onClick={onClick}>
    {texto}
  </button>
);

export default Boton;
