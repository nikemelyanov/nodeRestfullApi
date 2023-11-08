import styles from './bar.module.scss';
import imageFlame from '../../assets/icons/flame.png';

export default function Bar() {
  return (
    <div className={styles.menu}>
      <ul>
        <li className={styles.popular}>
          <a href="#">Популярные</a>
          <img src={imageFlame} alt="popular" />
        </li>
        <li>
          <a href="#">Вам понравились</a>
        </li>
        <li>
          <a href="#">Друзья</a>
        </li>
      </ul>
    </div>
  );
}
