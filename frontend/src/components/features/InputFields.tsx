import React, { ChangeEventHandler } from 'react';

interface InputFieldProps {
  id: string;
  label?: string;
  type: 'text' | 'date' | 'time' | 'number' | 'email' | 'tel';
  pattern?: string;
  inputMode?: 'search' | 'text' | 'numeric' | 'email' | 'tel' | 'url' | 'none' | 'decimal';
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = 'text',
  pattern,
  inputMode,
  onChange,
}) => {
  return (
    <div className="InputField">
      {label && (
        <label htmlFor={id}>
          <span>{label}</span>
        </label>
      )}
      <input type={type} pattern={pattern} inputMode={inputMode} id={id} onChange={onChange} />
    </div>
  );
};

export { InputField };
