import React, { memo, useEffect, useState } from 'react'
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

const ForumPage = memo(() => {
  const initialPost = {
    title: '',
    body: '',
  }
  const [topics, setTopics] = useState<CreateTopicProps[]>([])
  const [isCreateTopicModalOpened, setIsCreateTopicModalOpened] =
    useState<boolean>(false)
  const [post, setPost] =
    useState<Omit<CreateTopicProps, 'userId' | 'id'>>(initialPost)

  useEffect(() => {
    fetchPosts().then()
  }, [])

  const fetchPosts = async () => {
    const result = fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=5'
    ).then(res => res.json())
    setTopics(await result)
  }

  const toggleModal = () => {
    setIsCreateTopicModalOpened(!isCreateTopicModalOpened)
  }

  const createTopic = () => {
    setTopics([
      ...topics,
      { ...post, id: Date.now(), userId: Math.floor(Math.random() * 10) },
    ])
    setIsCreateTopicModalOpened(false)
    setPost(initialPost)
  }

  return (
    <div className="forum-page">
      <h2>Forum</h2>
      {topics.map(item => {
        return (
          <ForumTopic header={item.title} theme={item.body} key={item.id} />
        )
      })}
      <div className="forum-page__button">
        <GuiButton onClick={toggleModal} btnText="Создать тему" />
      </div>

      {isCreateTopicModalOpened && (
        <div className="forum-page__modal">
          <ModalCreateForumTopic onClose={toggleModal}>
            <form onSubmit={createTopic}>
              <label htmlFor="postTitle">Тема форума</label>
              <input
                type="postTitle"
                id="sentTheme"
                className="forum-page__input"
                placeholder="Введите тему форума"
                name="title"
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
              />
              <label htmlFor="postBody">Тема форума</label>
              <input
                type="text"
                id="postBody"
                className="forum-page__input"
                placeholder="Введите краткое описание"
                name="body"
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
              />
              <div className="forum-page__button modal__button">
                <GuiButton onClick={createTopic} btnText="Создать тему" />
              </div>
            </form>
          </ModalCreateForumTopic>
        </div>
      )}
    </div>
  )
})

export default ForumPage
