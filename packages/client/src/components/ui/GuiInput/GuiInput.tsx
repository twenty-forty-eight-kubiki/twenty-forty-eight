import './GuiInput.scss'
import React, {FC, FormEvent, ReactElement} from "react";

type GuiInputProps = {
    value: string|number;
    label: string;
    placeholder: string;
    type?: string;
    disabled?: boolean;
    onChange: (e: FormEvent) => void;
}

const GuiInput: FC<GuiInputProps> = ({value, onChange, label, placeholder, type = 'text', disabled = false }): ReactElement => {

    const getClassName = () => {
        const classNames = ['gui-input-control'];

        if (disabled) {
            classNames.push('gui-input-control--disabled');
        }

        return classNames.join(' ');
    }

    return (
        <div className="gui-input">
            <label className="gui-input-label">
                <span>{label}</span>
                <input
                    value={value}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={getClassName()}
                    onChange={(e: FormEvent) => onChange(e)}
                />
            </label>
        </div>
    )
}

export default GuiInput