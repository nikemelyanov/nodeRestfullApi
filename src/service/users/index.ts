import pool from "../../db";
import bcrypt from "bcrypt";

export class UserService {
  static async createUser(user: any) {
    const pass = user.password;
    const saltRounds = 10;

    const passHash = await bcrypt.hash(pass, saltRounds, function (err, hash) {
      if (err) {
        console.error(err);
        return;
      }
      pool.query(
        "INSERT INTO users (email, password_hash, avatar_path, first_name, last_name) VALUES ($1, $2, $3, $4, $5)",
        [user.email, hash, user.avatar_path, user.first_name, user.last_name]
      );
    });
  }

  static async deleteUser(user_id: number) {
    try {
      const res = pool.query("DELETE FROM users WHERE id = $1", [user_id]);
    } catch (err) {
      console.error(err);
    }
  }

  static async getAllUsers() {
    try {
      const res = await pool.query("SELECT * FROM users");
    } catch (err) {
      console.error(err);
    }
  }

  static async getUser(user_email: number) {
    try {
      const res = await pool.query("SELECT * FROM users WHERE email = $1", [
        user_email,
      ]);
      const user = res.rows[0];
      return user;
    } catch (err) {
      console.error(err);
    }
  }

  static async createUserTable() {
    try {
      const res = await pool.query(
        "CREATE TABLE users (id serial PRIMARY KEY, email VARCHAR(50), password VARCHAR(50))"
      );
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  }

  static async dropUserTable() {
    try {
      const res = await pool.query("DROP TABLE IF EXISTS users");
    } catch (err) {
      console.error(err);
    }
  }
}
