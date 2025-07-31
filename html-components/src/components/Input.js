const Input = ({ type, placeholder, value, onChange, ...props }) => (
  <input
    type={type}
    className="form-control mb-2"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    {...props}
  />
);

export default Input;
