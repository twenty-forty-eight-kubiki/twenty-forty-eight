import React, { useEffect, useState } from 'react'
import ForumTopic from '../../components/ForumTopic/ForumTopic'
import GuiButton from '../../ui/GuiButton/GuiButton'
import ModalCreateForumTopic from '../../components/ModalCreateForumTopic/ModalCreateForumTopic'
import './ForumPage.scss'

interface CreateTopicProps {
  id: number
  userId: number
  title: string
  body: string
}

const ForumPage = () => {
  const [topics, setTopics] = useState<CreateTopicProps[]>([])
  const [modal, setModal] = useState<boolean>(false)
  const [post, setPost] = useState<Omit<CreateTopicProps, 'userId' | 'id'>>({
    title: '',
    body: '',
  })

  useEffect(() => {
    fetchPost().then()
  }, [])

  const fetchPost = async () => {
    const result = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=5'
    ).then(res => res.json())
    setTopics(result)
  }

  const toggleModal = (event: { stopPropagation: () => void }) => {
    event.stopPropagation()
    setModal(!modal)
  }

  const createTopic = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setTopics([
      ...topics,
      { ...post, id: Date.now(), userId: Math.floor(Math.random() * 10) },
    ])
    setModal(false)
    setPost({ title: '', body: '' })
  }

  return (
    <div className="ForumPage">
      <h2>Forum</h2>
      {topics.map(item => {
        return (
          <ForumTopic header={item.title} theme={item.body} key={item.id} />
        )
      })}
      <div className="ForumPage__button">
        <GuiButton onClick={() => toggleModal} btnText="Создать тему" />
      </div>

      {modal && (
        <div className="ForumPage__modal">
          <ModalCreateForumTopic modalClose={toggleModal}>
            <form onSubmit={createTopic}>
              <label htmlFor="postTitle">Тема форума</label>
              <input
                type="postTitle"
                id="sentTheme"
                className="FormPage__input"
                placeholder="Введите тему форума"
                name="title"
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
              />
              <label htmlFor="postBody">Тема форума</label>
              <input
                type="text"
                id="postBody"
                className="FormPage__input"
                placeholder="Введите краткое описание"
                name="body"
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
              />
              <div style={{ textAlign: 'center' }}>
                <GuiButton btnText="Создать тему" />
              </div>
            </form>
          </ModalCreateForumTopic>
        </div>
      )}
    </div>
  )
}

export default ForumPage
