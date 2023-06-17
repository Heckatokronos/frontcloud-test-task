import React from "react";
import { Field, ErrorMessage, useField } from "formik";
import "./Input.scss";

type InputProps = {
  name: string;
  label?: string;
  type?: string;
  placeholder: string;
};

export const Input: React.FC<InputProps> = ({
  name,
  label,
  type = "text",
  placeholder,
}) => {
  const [field, meta] = useField(name);

  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <Field
        id={name}
        name={name}
        type={type}
        className="form-control"
        placeholder={placeholder}
      />
      {meta.touched && meta.error ? (
        <ErrorMessage name={name} component="div" className="error" />
      ) : null}
    </div>
  );
};
