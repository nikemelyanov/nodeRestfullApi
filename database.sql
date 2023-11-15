-- SELECT posts.id, COUNT(post_likes.id) AS like_count
-- FROM posts
-- LEFT JOIN post_likes ON posts.id = post_likes.post_liked_id
-- GROUP BY posts.id;

-- SELECT posts.id, posts.title, posts.body, users.avatar, CONCAT(users.firstname, ' ', users.lastname) fullname 
-- FROM public.posts
-- LEFT JOIN users ON users.id = posts.user_id 
-- ORDER BY posts.id ASC;