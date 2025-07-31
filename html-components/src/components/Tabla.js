const Tabla = ({ cabecera, datos }) => (
  <table className="table table-bordered">
    <thead>
      <tr>{cabecera.map((item, i) => <th key={i}>{item}</th>)}</tr>
    </thead>
    <tbody>
      {datos.map((fila, i) => (
        <tr key={i}>{fila.map((celda, j) => <td key={j}>{celda}</td>)}</tr>
      ))}
    </tbody>
  </table>
);

export default Tabla;
