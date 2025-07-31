const Formulario = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit} className="p-3 border rounded">{children}</form>
);

export default Formulario;
