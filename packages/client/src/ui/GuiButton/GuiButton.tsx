import './GuiButton.scss'
import { MouseEventHandler } from 'react'

interface GuiButtonProps {
  children?: string
  clickHandler?: MouseEventHandler
}

const GuiButton = ({ children, clickHandler }: GuiButtonProps) => {
  return (
    <button className="gui-button" onClick={clickHandler}>
      {children}
    </button>
  )
}

export default GuiButton
