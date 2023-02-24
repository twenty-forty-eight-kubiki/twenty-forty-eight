import './GuiButton.scss'
import React, { FC, FormEvent, ReactElement } from 'react'

type GuiButtonProps = {
  type?: string
  btnText: string
  className?: string
  onClick?: () => void
}

const GuiButton: FC<GuiButtonProps> = ({
  type = 'button',
  btnText,
  onClick,
  className,
}): ReactElement => {
  const btnClass = () => {
    const classes = ['gui-button']
    if (className) {
      classes.push(className)
    }

    return classes.join(' ')
  }

  return (
    <button className={btnClass()} type={type} onClick={() => onClick}>
      {btnText}
    </button>
  )
}

export default GuiButton
