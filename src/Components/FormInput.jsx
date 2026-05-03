const FormInput = ({name, type, placeholder, value, onChange}) => {
    return (
        <input
            required
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            autoComplete={name}          // for the browser
            className="bg-gray-200 h-10 w-full py-2 px-3 rounded-md placeholder-gray-400"
        />
    )
}

export default FormInput
