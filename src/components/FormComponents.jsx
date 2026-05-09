// FormInput.jsx - Reusable form input component with validation
import React from "react";

export default function FormInput({
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  success,
  required = false,
  placeholder,
  disabled = false,
  className = "",
  ...props
}) {
  const inputClass = `form-input ${error ? "error" : ""} ${success ? "success" : ""} ${disabled ? "disabled" : ""} ${className}`;

  return (
    <div className="form-group">
      {label && (
        <label className="form-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        className={inputClass}
        {...props}
      />
      {error && <div className="form-error">{error}</div>}
      {success && <div className="form-success">{success}</div>}
    </div>
  );
}

// FormSelect.jsx - Reusable select component
export function FormSelect({
  label,
  value,
  onChange,
  options = [],
  required = false,
  placeholder = "Select...",
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <div className="form-group">
      {label && (
        <label className="form-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`form-select ${className}`}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

// FormCheckbox.jsx - Reusable checkbox component
export function FormCheckbox({
  label,
  checked,
  onChange,
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <div className="form-group">
      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={`checkbox-input ${className}`}
          {...props}
        />
        <span className="checkbox-label">{label}</span>
      </label>
    </div>
  );
}

// FormRadio.jsx - Reusable radio component
export function FormRadio({
  label,
  name,
  value,
  checked,
  onChange,
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <div className="form-group">
      <label className="radio-container">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={`radio-input ${className}`}
          {...props}
        />
        <span className="radio-label">{label}</span>
      </label>
    </div>
  );
}

// FormTextarea.jsx - Reusable textarea component
export function FormTextarea({
  label,
  value,
  onChange,
  onBlur,
  error,
  success,
  required = false,
  placeholder,
  disabled = false,
  rows = 4,
  className = "",
  ...props
}) {
  return (
    <div className="form-group">
      {label && (
        <label className="form-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <textarea
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        className={`form-textarea ${error ? "error" : ""} ${success ? "success" : ""} ${disabled ? "disabled" : ""} ${className}`}
        {...props}
      />
      {error && <div className="form-error">{error}</div>}
      {success && <div className="form-success">{success}</div>}
    </div>
  );
}
