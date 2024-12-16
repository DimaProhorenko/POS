const Select = ({
  label,
  name,
  value,
  onChange,
  options,
  className = "",
  ...props
}) => {
  return (
    <div className="form-control w-full">
      {label && (
        <div className="label capitalize">
          <label htmlFor={label} className="label-text text-lg">
            {label}
          </label>
        </div>
      )}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`select select-bordered w-full ${className}`}
        {...props}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
