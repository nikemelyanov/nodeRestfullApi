import Header from '../../components/header';
import styles from './user.module.scss';

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <p>Настроить профиль</p>
        <ul>
          <li>
            <img src={`http://localhost:4000/images/1.png`} alt="" />
          </li>
          <li>
            <img src={`http://localhost:4000/images/2.png`} alt="" />
          </li>
          <li>
            <img src={`http://localhost:4000/images/3.png`} alt="" />
          </li>
          <li>
            <img src={`http://localhost:4000/images/4.png`} alt="" />
          </li>
          <li>
            <img src={`http://localhost:4000/images/5.png`} alt="" />
          </li>
          <li>
            <img src={`http://localhost:4000/images/6.png`} alt="" />
          </li>
          <li>
            <img src={`http://localhost:4000/images/7.png`} alt="" />
          </li>
          <li>
            <img src={`http://localhost:4000/images/8.png`} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
