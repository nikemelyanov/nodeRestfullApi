import React from 'react';
import axios from 'axios';
import Comment from '../comment';
import styles from './commentsList.module.scss';

export default function CommentsList(props: any) {
  const [commentData, setCommentData] = React.useState([]);
  const [commentBody, setCommentBody] = React.useState('');

  React.useEffect(() => {
    getComments();
  }, []);

  const getComments = () => {
    axios
      .post('http://localhost:4000/comments/getComments', {
        postId: props.postId,
      })
      .then((response) => {
        setCommentData(response.data);
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    axios
      .post(
        'http://localhost:4000/comments/createComment',
        {
          commentBody: commentBody,
          postId: props.postId,
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      )
      .then(() => {
        getComments();
        setCommentBody('');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function renderComments() {
    return commentData.map((comment: any) => (
      <Comment
        key={comment.id}
        id={comment.id}
        body={comment.body}
        author={comment.author}
        date={comment.date}
        avatar={comment.avatar}
      />
    ));
  }

  return (
    <>
      <form className={styles.commentsForm} onSubmit={handleSubmit}>
        <input
          className={styles.commentBody}
          type="text"
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
        />
        <button type="submit">опубликовать</button>
      </form>
      {renderComments()}
    </>
  );
}
