import React from 'react'
import './TopicPage.scss'
import Topic from '../../components/Topic/Topic'
import Comments from '../../components/Comments/Comments'

const TopicPage = () => {
  return (
    <div className="TopicPage">
      <Topic />
      <Comments />
    </div>
  )
}

export default TopicPage
