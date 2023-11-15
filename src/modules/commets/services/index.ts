import pool from "../../../db";

export class CommentsServise {
  static async getComments(post_id: number) {
    try {
      const result = await pool.query(
        "SELECT comments.id, comments.body, comments.created_at, users.avatar_path, users.first_name, users.last_name FROM comments JOIN users ON users.id = comments.author_id WHERE post_id = $1",
        [post_id]
      );
      return result.rows;
    } catch (err) {
      console.error(err);
    }
  }

  static async createComment(body: string, post_id: number, author_id: number) {
    try {
      const result = await pool.query(
        "INSERT INTO comments(body, post_id, author_id) VALUES ($1, $2, $3)",
        [body, post_id, author_id]
      );
    } catch (err) {
      console.error(err);
    }
  }
}
