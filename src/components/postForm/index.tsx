import axios from 'axios';
import { useState } from 'react';
import styles from './postForm.module.scss';

export default function PostForm(props: any) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    axios
      .post(
        'http://localhost:4000/posts/addPost',
        {
          title: title,
          body: body,
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      )
      .catch((error) => {
        console.error(error);
      })
      .then(() => {
        props.tapPlus();
        props.getPosts();
      });
  };

  return (
    <form className={styles.postForm} onSubmit={handleSubmit}>
      <input
        className={styles.postTitle}
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className={styles.postBody}
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">опубликовать</button>
    </form>
  );
}
