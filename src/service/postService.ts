import pool from '../database.js';

export async function addPost(
  postTitle: string,
  postBody: string,
) {
  try {
    const res = await pool.query(
      'INSERT INTO posts(title, body) VALUES ($1, $2)',
      [postTitle, postBody]
    );
  } catch (err) {
    console.error(err);
  }
}
export async function deletePost(postId: number) {
  try {
    const res = pool.query('DELETE FROM posts WHERE id = $1', [postId]);
  } catch (err) {
    console.error(err);
  }
}
export async function getPosts() {
  try {
    const res = await pool.query('SELECT * FROM posts');
    return res.rows
  } catch (err) {
    console.error(err);
  }
}
export async function getPost(postTitle: number) {
  try {
    const res = await pool.query('SELECT * FROM posts WHERE title = $1', [
      postTitle,
    ]);
    const user = res.rows[0];
    return user;
  } catch (err) {
    console.error(err);
  }
}
