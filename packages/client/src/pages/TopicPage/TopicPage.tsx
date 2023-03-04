import React from 'react'
import Topic from '../../components/Topic/Topic'
import Comments from '../../components/Comments/Comments'
import './TopicPage.scss'

const TopicPage = () => {
  const comments = [
    {
      postId: 1,
      id: 1,
      user_name: 'User_1',
      date: '23.03.2012',
      name: 'id labore ex et quam laborum',
      email: 'Eliseo@gardner.biz',
      body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
    },
    {
      postId: 1,
      id: 2,
      user_name: 'User_2',
      date: '10.11.2013',
      name: 'quo vero reiciendis velit similique earum',
      email: 'Jayne_Kuhic@sydney.com',
      body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
    },
    {
      postId: 1,
      id: 3,
      user_name: 'User_3',
      date: '04.08.2019',
      name: 'odio adipisci rerum aut animi',
      email: 'Nikita@garfield.biz',
      body: 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
    },
  ]
  return (
    <div className="TopicPage">
      <Topic />
      <Comments comments={comments} />
    </div>
  )
}

export default TopicPage
