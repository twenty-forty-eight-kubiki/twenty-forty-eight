import React, { FC, memo, ReactElement } from 'react'
import { Link } from 'react-router-dom'
import './GuiLink.scss'

type GuiLinkProps = {
  url: string
  text: string
}

const GuiLink: FC<GuiLinkProps> = memo(({ url, text }): ReactElement => {
  return (
    <Link to={url} className="gui-link">
      {text}
    </Link>
  )
})

export default GuiLink
