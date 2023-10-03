-- create TABLE person(
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(255),
--   surname VARCHAR(255)
-- )

-- create TABLE post(
--   id SERIAL PRIMARY KEY,
--   title VARCHAR(255),
--   content VARCHAR(255),
--   user_id INTEGER,
--   FOREIGN KEY (user_id) REFERENCES person (id)
-- )

-- SELECT posts.id, posts.title, posts.body, users.avatar, CONCAT(users.firstname, ' ', users.lastname) fullname 
-- FROM public.posts
-- LEFT JOIN users ON users.id = posts.user_id 
-- ORDER BY posts.id ASC;