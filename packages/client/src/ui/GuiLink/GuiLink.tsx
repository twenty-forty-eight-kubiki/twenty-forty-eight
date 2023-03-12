import React, { FC, ReactElement } from 'react'
import './GuiLink.scss'
import { Link } from 'react-router-dom'

type GuiLinkProps = {
  url: string
  text: string
}

const GuiLink: FC<GuiLinkProps> = ({ url, text }): ReactElement => {
  return (
    <Link to={url} className="gui-link">
      {text}
    </Link>
  )
}

export default GuiLink
