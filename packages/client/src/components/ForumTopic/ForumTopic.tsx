import React from 'react'
import './ForumTopic.scss'

interface ForumTopicProps {
  theme: string
  header: string
}

const ForumTopic = ({ header, theme }: ForumTopicProps) => {
  return (
    <div className="forum-topic">
      <h3 className="forum-topic__header">{header}</h3>
      <p className="forum-topic__theme">{theme}</p>
    </div>
  )
}

export default ForumTopic
