import styles from './comment.module.scss';

export default function Comment(props: any) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img
          className={styles.avatar}
          src={`http://localhost:4000/images/${props.avatar}`}
          alt="userImages"
        />
        <p className={styles.author}>{props.author}</p>
      </div>
      <p className={styles.body}>{props.body}</p>
      <div className={styles.bottom}>
        <div className={styles.date}>{props.date}</div>
      </div>
    </div>
  );
}
