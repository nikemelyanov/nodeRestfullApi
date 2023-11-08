import pool from '../../database.js';

export class CommentsServise {
  static async getComments(postId: number) {
    try {
      const result = await pool.query(
        'SELECT * FROM comments WHERE post_id = $1 ORDER BY id DESC',
        [postId]
      );
      return result.rows;
    } catch (err) {
      console.error(err);
    }
  }

  static async createComment(
    commentBody: string,
    postId: number,
    authorId: number,
    author: string,
    createdDate: string,
    avatar: string
  ) {
    try {
      const result = await pool.query(
        'INSERT INTO comments(body, post_id, user_id, author, date, avatar) VALUES ($1, $2, $3, $4, $5, $6)',
        [commentBody, postId, authorId, author, createdDate, avatar]
      );
    } catch (err) {
      console.error(err);
    }
  }
}
