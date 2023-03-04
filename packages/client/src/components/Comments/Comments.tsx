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
    <div className="Comments">
      <h4>Comments</h4>
      {props.comments.map(comment => {
        return (
          <div style={{ marginBottom: 30 }}>
            <div className="Comments__header">
              <Icon img="" />
              <div className="Comments__info">
                <div>
                  <span className="user-name">{comment.user_name}</span>, &nbsp;
                  <span className="Comments__date">{comment.date}</span>
                </div>
                <div className="Comments__title">{comment.name}</div>
              </div>
            </div>
            <div className="Comments__body">{comment.body}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Comments
