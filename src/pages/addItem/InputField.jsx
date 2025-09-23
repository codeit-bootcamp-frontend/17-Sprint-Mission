import { useState } from "react";

export default function InputField({
  id,
  label,
  type = "text",
  placeholder,
  errorMessage,
  ...inputProps
}) {
  const [touched, setTouched] = useState(false);

  const handleBlur = (e) => {
    setTouched(true);
    if (inputProps.onBlur) inputProps.onBlur(e);
  };

  const value = inputProps.value || "";

  let errors =
    touched && (!value.trim() || (type === "number" && !/^\d+$/.test(value)));

  return (
    <li className={errors ? "has_error" : ""}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className="input_style"
        type={type}
        placeholder={placeholder}
        onBlur={handleBlur}
        {...inputProps}
      />
      {errors && <span className="errorText">{errorMessage}</span>}
    </li>
  );
}
