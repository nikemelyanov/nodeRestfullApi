import pool from '../database.js';

export async function createPost(
  postTitle: string,
  postBody: string,
  authorId: number,
  author: string,
  createdDate: string
) {
  try {
    const result = await pool.query(
      'INSERT INTO posts(title, body, user_id, author, date) VALUES ($1, $2, $3, $4, $5)',
      [postTitle, postBody, authorId, author, createdDate]
    );
  } catch (err) {
    console.error(err);
  }
}
export async function deletePost(postId: number) {
  try {
    const result = pool.query('DELETE FROM posts WHERE id = $1', [postId]);
  } catch (err) {
    console.error(err);
  }
}
export async function getAllPosts() {
  try {
    const result = await pool.query('SELECT * FROM posts');
    return result.rows
  } catch (err) {
    console.error(err);
  }
}
export async function getOnePost(postTitle: string) {
  try {
    const result = await pool.query('SELECT * FROM posts WHERE title = $1', [
      postTitle,
    ]);
    const post = result.rows[0];
    return post;
  } catch (err) {
    console.error(err);
  }
}
