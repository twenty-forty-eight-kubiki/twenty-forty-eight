import React, { FC, memo, ReactElement } from 'react'
import './GuiLink.scss'
import { Link } from 'react-router-dom'

type GuiLinkProps = {
  url: string
  text: string
  className?: string
}

const GuiLink: FC<GuiLinkProps> = memo(
  ({ url, text, className }): ReactElement => {
    return (
      <Link to={url} className={`gui-link ${className}`}>
        {text}
      </Link>
    )
  }
)

export default GuiLink
