import React, { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Topic from '../../components/Topic/Topic';
import Comments from '../../components/Comments/Comments';
import Loader from '../../components/Loader/Loader';
import GuiInput from '../../ui/GuiInput/GuiInput';
import GuiButton from '../../ui/GuiButton/GuiButton';
import { useAppSelector } from '../../hooks/store';
import { getUserData } from '../../store/selectors';
import { withLayout } from '../../hocs/withLayout';
import './TopicPage.scss';

interface TopicPageData {
  userId: number | null;
  id: number | null;
  title: string;
  body: string;
}

interface CommentsData {
  postId: number | null;
  id: number | null;
  name: string;
  email: string;
  body: string;
}

const TopicPage = () => {
  const initialTopic: TopicPageData = {
    userId: null,
    id: null,
    title: '',
    body: ''
  };
  const [domLoaded, setDomLoaded] = useState(false);
  const [topic, setTopic] = useState<TopicPageData>(initialTopic);
  const [comments, setComments] = useState<CommentsData[]>([]);
  const [commentText, setCommentText] = useState('');
  const params = useParams<{ postId: string }>();
  const userData = useAppSelector(getUserData);

  useEffect(() => {
    topicFetch().then();
    commentsFetch().then();
    setDomLoaded(true);
  }, []);

  const topicFetch = async () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then(res => res.json())
      .then(data => setTopic(data));
  };

  const commentsFetch = async () => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`
    )
      .then(res => res.json())
      .then(data => setComments(data));
  };

  const onChangeComment = (e: FormEvent) => {
    setCommentText((e.target as HTMLInputElement).value);
  };

  const commentSend = () => {
    if (commentText.trim() !== '') {
      const comment = {
          body: commentText || '',
          email: userData!.email || '',
          id: userData!.id,
          postId: Date.now(),
          name: userData!.login || ''
        } as CommentsData;
      setComments([...comments, comment]);
      setCommentText('');
    }
  };

  return (
    <>
      {domLoaded ? (
        <div className='topic-page'>
          <Topic topic={topic} />
          <div className='send-comments'>
            <GuiInput
              value={commentText}
              label=''
              placeholder='Оставить комментарий'
              onChange={onChangeComment}
            />
            <GuiButton btnText='Отправить' onClick={commentSend} />
          </div>
          <Comments comments={comments} />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default withLayout(TopicPage);
