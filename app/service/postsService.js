import pool from '../database.js';
class postServiceClass {
    async createPost(postTitle, postBody, authorId, author, createdDate, avatar) {
        try {
            const result = await pool.query('INSERT INTO posts(title, body, user_id, author, date, avatar) VALUES ($1, $2, $3, $4, $5, $6)', [postTitle, postBody, authorId, author, createdDate, avatar]);
        }
        catch (err) {
            console.error(err);
        }
    }
    async deletePost(postId) {
        try {
            const result = pool.query('DELETE FROM posts WHERE id = $1', [postId]);
        }
        catch (err) {
            console.error(err);
        }
    }
    async getAllPosts() {
        try {
            const result = await pool.query('SELECT * FROM posts ORDER BY id DESC');
            return result.rows;
        }
        catch (err) {
            console.error(err);
        }
    }
    async getOnePost(postTitle) {
        try {
            const result = await pool.query('SELECT * FROM posts WHERE title = $1', [
                postTitle,
            ]);
            const post = result.rows[0];
            return post;
        }
        catch (err) {
            console.error(err);
        }
    }
}
export const postService = new postServiceClass();
