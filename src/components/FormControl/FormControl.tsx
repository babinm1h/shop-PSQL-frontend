import React from 'react';
import "./FormControl.scss"

interface IFormControlProps {
    value: string | number
    onChange: any
    htmlFor: string
    label: string
    placeholder: string
    type: string
}

const FormControl: React.FC<IFormControlProps> = ({ value, type, onChange, htmlFor, label, placeholder }) => {
    return (
        <>
            <label htmlFor={htmlFor} className="form__label">{label}</label>
            <input type={type} className="form__input"
                placeholder={placeholder} id={htmlFor}
                value={value} onChange={onChange} autoComplete="on" />
        </>
    );
};

export default FormControl;