-- SELECT posts.id, COUNT(post_likes.id) AS like_count
-- FROM posts
-- LEFT JOIN post_likes ON posts.id = post_likes.post_liked_id
-- GROUP BY posts.id;

-- SELECT posts.*, COUNT(post_likes.id) AS like_count, users.first_name, users.last_name, users.avatar_path
-- FROM posts
-- LEFT JOIN post_likes ON posts.id = post_likes.post_liked_id
-- JOIN users ON posts.author_id = users.id
-- GROUP BY posts.id, users.id

-- SELECT posts.id, posts.title, posts.body, users.avatar, CONCAT(users.firstname, ' ', users.lastname) fullname 
-- FROM public.posts
-- LEFT JOIN users ON users.id = posts.user_id 
-- ORDER BY posts.id ASC;

-- ALTER TABLE название_таблицы RENAME COLUMN старое_название_колонки TO новое_название_колонки;
