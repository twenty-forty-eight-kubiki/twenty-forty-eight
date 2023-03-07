import './GuiInput.scss'
import React, { FC, FormEvent, ReactElement } from 'react'

type GuiInputProps = {
  value: string | number
  label: string
  placeholder: string
  type?: string
  disabled?: boolean
  error?: string | null
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  onBlur: () => void
  onFocus: () => void
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
          onChange={(e:React.FormEvent<HTMLInputElement>) => onChange(e)}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </label>

      {!!props.error && (
        <div v-if={props.error} className="gui-input-error">
          {props.error}
        </div>
      )}
    </div>
  )
}

export default GuiInput
