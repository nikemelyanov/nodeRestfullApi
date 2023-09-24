import pool from '../database.js';

class CommentsServiseClass {

  async getComments(postId: number) {
    try {
      const result = await pool.query('SELECT * FROM comments WHERE post_id = $1', [postId])
      return result.rows
    } catch (err) {
      console.error(err)
    }
  }
}

export const CommentsServise = new CommentsServiseClass();
