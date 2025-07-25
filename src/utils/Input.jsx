function Input({type = "text", name, value, onChange, placeholder = "", className = "", required = false,}) {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`border border-gray-300 rounded-md p-2 ${className}`}
            required={required}
        />
    );

}

export default Input;