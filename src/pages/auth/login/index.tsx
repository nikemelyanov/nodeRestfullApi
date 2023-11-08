import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.scss';

const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigate = useNavigate();
  function navigateToRegister() {
    navigate('/register');
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    
    axios
      .post('http://localhost:4000/auth/login', {
        email: email,
        password: password,
      })
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        if (token) {
          navigate('/');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.logo}><span>RE</span>TWITTz</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
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
        <button type="submit">авторизация</button>
        <button onClick={navigateToRegister}>нет аккаунта?</button>
      </form>
    </div>
  );
};

export default LoginPage;
