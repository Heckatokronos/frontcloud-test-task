import React from "react";
import { Field, ErrorMessage, useField } from "formik";
import "./Input.scss";

type InputProps = {
  id: string;
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
  id,
}) => {
  const [field, meta] = useField(name);

  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <Field
        id={id}
        name={name}
        type={type}
        className="form-control"
        placeholder={placeholder}
        style={{ width: '300px' }}
      />
      {meta.touched && meta.error ? (
        <ErrorMessage name={name} component="div" className="error" />
      ) : null}
    </div>
  );
};
