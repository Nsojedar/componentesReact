const Titulo = ({ texto, nivel = 1 }) => {
  const Tag = `h${nivel}`;
  return <Tag className="fw-bold">{texto}</Tag>;
};

export default Titulo;
