import React, { FC, ReactElement } from 'react'
import './GuiLink.scss'

type GuiLinkProps = {
  url: string
  text: string
}

const GuiLink: FC<GuiLinkProps> = ({ url, text }): ReactElement => {
  return (
    <a href={url} className="gui-link">
      {text}
    </a>
  )
}

export default GuiLink
