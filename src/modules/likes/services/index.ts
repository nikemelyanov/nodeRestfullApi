import pool from "../../../db";

export class LikesService {
  static async add(postId: number, userId: number) {
    const checkLike = await pool.query(
      "SELECT * FROM post_likes WHERE post_liked_id = $1 AND author_id = $2",
      [postId, userId]
    );

    if (checkLike.rows.length > 0) {
      await pool.query(
        "DELETE FROM post_likes WHERE post_liked_id = $1 AND author_id = $2",
        [postId, userId]
      );
      return null;
    }

    const result = await pool.query(
      "INSERT INTO post_likes (post_liked_id, author_id) VALUES ($1, $2)",
      [postId, userId]
    );
  }
}
