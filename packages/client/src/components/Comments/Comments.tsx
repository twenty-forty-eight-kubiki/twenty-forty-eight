import React from 'react'
import Icon from '../../ui/Icon/Icon'
import './Comments.scss'

interface CommentsProps {
  postId: number
  id: number
  user_name: string
  date: string
  name: string
  email: string
  body: string
}

const Comments = (props: { comments: CommentsProps[] }) => {
  return (
    <div className="comments">
      <h4>Comments</h4>
      {props.comments.map(comment => {
        return (
          <div style={{ marginBottom: 30 }}>
            <div className="comments__header">
              <Icon img="" />
              <div className="comments__info">
                <div>
                  <span className="user-name">{comment.user_name}</span>, &nbsp;
                  <span className="comments__date">{comment.date}</span>
                </div>
                <div className="comments__title">{comment.name}</div>
              </div>
            </div>
            <div className="comments__body">{comment.body}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Comments
