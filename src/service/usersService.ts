import pool from '../database.js';

class userServiceClass {
  async createUser(user: any) {
    try {
      const res = await pool.query(
        'INSERT INTO users (email, password, avatar, firstname, lastname) VALUES ($1, $2, $3, $4, $5)',
        [user.email, user.password, user.avatar, user.firstname, user.lastname]
      );
    } catch (err) {
      console.error(err);
    } finally {
    }
  }
  async deleteUser(userId: number) {
    try {
      const res = pool.query('DELETE FROM users WHERE id = $1', [userId]);
    } catch (err) {
      console.error(err);
    }
  }
  async getAllUsers() {
    try {
      const res = await pool.query('SELECT * FROM users');
    } catch (err) {
      console.error(err);
    } finally {
    }
  }
  async getUser(userEmail: number) {
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

  async createUserTable() {
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
  async dropUserTable() {
    try {
      const res = await pool.query('DROP TABLE IF EXISTS users');
    } catch (err) {
      console.error(err);
    }
  }
}

export const userService = new userServiceClass();