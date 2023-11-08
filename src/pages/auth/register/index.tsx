import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './register.module.scss';

const RegisterPage = () => {
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [avatar, setAvatar] = React.useState('');

  const navigate = useNavigate();
  function navigateToLogin() {
    navigate('/login');
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    await axios
      .post('http://localhost:4000/auth/register', {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        avatar: avatar,
      })
      .catch((error) => {
        console.error(error);
      });

    navigateToLogin();
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.logo}>
        <span>RE</span>TWITTz
      </h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Имя - не используйте кириллицу (временно)."
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Фамилия - не используйте кириллицу (временно)."
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Аватар"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
        <button type="submit">зарегистрироваться</button>
        <button onClick={navigateToLogin}>уже есть аккаунт?</button>
      </form>
    </div>
  );
};

export default RegisterPage;
