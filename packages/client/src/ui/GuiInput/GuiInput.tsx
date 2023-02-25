import './GuiInput.scss'
import React, { FC, FormEvent, ReactElement } from 'react'
import {FormFields} from "../../types/form";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type GuiInputProps = {
  value: string | number
  label: string
  placeholder: string
  type?: string
  disabled?: boolean
  error?: string | null
  name: FormFields
  onChange: (e: FormEvent) => void
  onBlur: (name: string) => void
  onFocus: (name: string) => void
}

const GuiInput: FC<GuiInputProps> = ({
  onBlur,
  onChange,
  onFocus,
  ...props
}): ReactElement => {
  const getClassName = () => {
    const classNames = ['gui-input-control']

    if (props.disabled) {
      classNames.push('gui-input-control--disabled')
    }
    if (props.error) {
      classNames.push('gui-input-control--error')
    }

    return classNames.join(' ')
  }


  return (
    <div className="gui-input">
      <label className="gui-input-label">
        <span>{props.label}</span>
        <input
          value={props.value}
          type={props.type}
          placeholder={props.placeholder}
          disabled={props.disabled}
          className={getClassName()}
          onChange={(e: FormEvent) => onChange(e)}
          onBlur={() => onBlur(props.name)}
          onFocus={() => onFocus(props.name)}
        />
      </label>

      <div v-if={props.error} className="gui-input-error">
        {props.error}
      </div>
    </div>
  )
}

export default GuiInput
