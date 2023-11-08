import pool from '../../db';

export class CommentsServise {
  static async getComments(post_id: number) {
    try {
      const result = await pool.query(
        'SELECT * FROM comments WHERE post_id = $1 ORDER BY id DESC',
        [post_id]
      );
      return result.rows;
    } catch (err) {
      console.error(err);
    }
  }

  static async createComment(
    comment_body: string,
    post_id: number,
    author_id: number,
    author_name: string,
    created_date: string,
    avatar_path: string
  ) {
    try {
      const result = await pool.query(
        'INSERT INTO comments(comment_body, post_id, author_id, author_name, created_date, avatar_path) VALUES ($1, $2, $3, $4, $5, $6)',
        [comment_body, post_id, author_id, author_name, created_date, avatar_path]
      );
    } catch (err) {
      console.error(err);
    }
  }
}
