import React from 'react';
import InputFieldStyles from './input-field.styles';
import { InputFieldProps } from './input-field.interface';
import { InputFieldTypes } from './input-field.enum';
const InputField: React.FC<InputFieldProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
  className,
  onBlur,
  isRequired,
}) => {
  return (
    <InputFieldStyles className={`input-field-wrapper ${className}`}>
      {label && (
        <label htmlFor={label}>
          {label} {isRequired && <span className="required">*</span>}
        </label>
      )}
      {type === InputFieldTypes.TEXT_AREA ? (
        <textarea
          id={label}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          onBlur={onBlur}
        ></textarea>
      ) : (
        <input
          type={type}
          id={label}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          onBlur={onBlur}
        />
      )}

      {error && <p className="error">{error}</p>}
    </InputFieldStyles>
  );
};

export default InputField;
