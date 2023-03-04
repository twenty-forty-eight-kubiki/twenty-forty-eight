import React from 'react'
import Icon from '../../ui/Icon/Icon'
import './Topic.scss'

interface TopicProps {
    user_name: string;
    date: string;
    id: number;
    title: string;
    body: string;
}

const Topic = (props: { topic: TopicProps }) => {
    return (
        <div className="Topic">
            <div className="Topic__header">
                <Icon img=""/>
                <div className="Topic__info">
                    <div>
                        <span className="user-name">{props.topic.user_name}</span>, &nbsp;
                        <span className="Topic__date">{props.topic.date}</span>
                    </div>
                    <p className="Topic__theme">{props.topic.title}</p>
                </div>
            </div>
            <div className="Topic__body">{props.topic.body}</div>
        </div>
    )
}

export default Topic
