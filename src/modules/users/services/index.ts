import pool from "../../../db";
import { PassService } from "../../auth/services/pass_service";

export class UserService {
  static async createUser(user: any) {
    const hash_password = await PassService.generateHash(user.password);

    const res = await pool.query(
      "INSERT INTO users (email, password_hash, avatar_path, first_name, last_name) VALUES ($1, $2, $3, $4, $5)",
      [
        user.email,
        hash_password,
        user.avatar_path,
        user.first_name,
        user.last_name,
      ]
    );
  }

  static async deleteUser(user_id: number) {
    try {
      const res = await pool.query("DELETE FROM users WHERE id = $1", [
        user_id,
      ]);
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

  static async getUser(user_email: string, user_password: string) {
    try {
      const res = await pool.query("SELECT * FROM users WHERE email = $1", [
        user_email,
      ]);
      const user = res.rows[0];

      if (user) {
        const checkPassword = await PassService.checkPassword(
          user_password,
          user.password_hash
        );

        if (checkPassword) {
          return user;
        }
      } else {
        return null;
      }
    } catch (err) {
      console.error(err);
    }
  }

  static async findByEmail(user_email: string) {
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

  static async updateAvatar(newAvatarPath: string, user_id: number) {
    try {
      const res = pool.query('UPDATE users SET avatar_path = $1 WHERE id = $2', [newAvatarPath, user_id])
    } catch (err) {
      console.error(err);
    }
  }
}
