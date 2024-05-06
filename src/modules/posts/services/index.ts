import pool from '../../../db';

export class PostService {
  static async createPost(title: string, body: string, author_id: number) {
    try {
      const result = await pool.query(
        'INSERT INTO posts(title, body, author_id) VALUES ($1, $2, $3)',
        [title, body, author_id],
      );
    } catch (err) {
      console.error(err);
    }
  }
  static async deletePost(post_id: number) {
    try {
      const result = pool.query('DELETE FROM posts WHERE id = $1', [post_id]);
    } catch (err) {
      console.error(err);
    }
  }
  static async getAllPosts() {
    try {
      const result = await pool.query(
        'SELECT posts.*, COUNT(post_likes.id) AS like_count, users.first_name, users.last_name, users.avatar_path FROM posts LEFT JOIN post_likes ON posts.id = post_likes.post_liked_id JOIN users ON posts.author_id = users.id GROUP BY posts.id, users.id ORDER BY like_count DESC',
      );
      return result.rows;
    } catch (err) {
      console.error(err);
    }
  }
  static async getOnePost(title: string) {
    try {
      const result = await pool.query('SELECT * FROM posts WHERE title = $1', [
        title,
      ]);
      const post = result.rows[0];
      return post;
    } catch (err) {
      console.error(err);
    }
  }
}
