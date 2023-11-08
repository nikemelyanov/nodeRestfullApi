import { useEffect, useState } from 'react';
import styles from './header.module.scss';
import logoutImg from '../../assets/icons/logout.png';
import { useNavigate } from 'react-router-dom';

import user from '../../assets/images/7.png';

export default function Header(props: any) {
  const [payload, setPayload] = useState({
    firstname: '',
    lastname: '',
    avatar: '',
  });

  useEffect(() => {
    try {
      const token = localStorage.getItem('token');
      if (token !== null) {
        const tokenParts = token.split('.');
        const userPayload = JSON.parse(
          decodeURIComponent(window.atob(tokenParts[1]))
        );
        setPayload(userPayload);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  const navigate = useNavigate();

  function navigateToMainPage() {
    navigate('/');
  }

  function navigateToUserPage() {
    navigate('/user');
  }

  function logout() {
    const token = localStorage.getItem('token');
    if (token) {
      localStorage.removeItem('token');
      navigate('/login');
    }
  }

  return (
    <div className={styles.header}>
      <h1 className={styles.logo} onClick={navigateToMainPage}>
        <span>RE</span>TWITTz
      </h1>

      <div className={styles.user}>
        <img
          className={styles.avatar}
          src={`http://localhost:4000/images/${payload.avatar}`}
          alt="userImages"
          onClick={navigateToUserPage}
        />
        <div className={styles.userInfo}>
          {payload.firstname + ' ' + payload.lastname}
        </div>
        <img
          className={styles.logout}
          src={logoutImg}
          alt="logout"
          onClick={logout}
        />
      </div>
    </div>
  );
}
