import Bar from '../../components/bar';
import Header from '../../components/header';
import PostList from '../../components/postList';

import styles from './home.module.scss';

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <Bar />
        <div className={styles.postListContainer}>
          <PostList />
        </div>
      </div>
    </div>
  );
}
