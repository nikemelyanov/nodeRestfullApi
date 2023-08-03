import pool from '../database.js';

export async function createUserTable() {
  try {
    const res = await pool.query(
      'CREATE TABLE users (id serial PRIMARY KEY, email VARCHAR(50), password VARCHAR(50))'
    );
    console.log(res);
  } catch (err) {
    console.error(err);
  } finally {
  }
}
export async function dropUserTable() {
  try {
    const res = await pool.query('DROP TABLE IF EXISTS users');
  } catch (err) {
    console.error(err);
  }
}

export async function createUser(userEmail: string, userPassword: string) {
  try {
    const res = await pool.query(
      'INSERT INTO users (email, password) VALUES ($1, $2)',
      [userEmail, userPassword]
    );
  } catch (err) {
    console.error(err);
  } finally {
  }
}
export async function deleteUser(userId: number) {
  try {
    const res = pool.query('DELETE FROM users WHERE id = $1', [userId]);
  } catch (err) {
    console.error(err);
  }
}
export async function getAllUsers() {
  try {
    const res = await pool.query('SELECT * FROM users');
  } catch (err) {
    console.error(err);
  } finally {
  }
}
export async function getUser(userEmail: number) {
  try {
    const res = await pool.query('SELECT * FROM users WHERE email = $1', [
      userEmail,
    ]);
    const user = res.rows[0];
    return user;
  } catch (err) {
    console.error(err);
  }
}
