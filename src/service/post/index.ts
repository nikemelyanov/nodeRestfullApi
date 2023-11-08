import pool from '../../db';

export class PostService {
  static async createPost(
    post_title: string,
    post_body: string,
    author_id: number,
    author_name: string,
    created_date: string,
    avatar_path: string
  ) {
    try {
      const result = await pool.query(
        'INSERT INTO posts(post_title, post_body, author_id, author_name, created_date, avatar_path) VALUES ($1, $2, $3, $4, $5, $6)',
        [post_title, post_body, author_id, author_name, created_date, avatar_path]
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
      const result = await pool.query('SELECT * FROM posts ORDER BY id DESC');
      return result.rows;
    } catch (err) {
      console.error(err);
    }
  }
  static async getOnePost(post_title: string) {
    try {
      const result = await pool.query('SELECT * FROM posts WHERE post_title = $1', [
        post_title,
      ]);
      const post = result.rows[0];
      return post;
    } catch (err) {
      console.error(err);
    }
  }
}
