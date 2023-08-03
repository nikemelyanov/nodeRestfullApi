import { createPost, getOnePost, getAllPosts } from '../../service/postService.js';

export async function addPost(req: any, res: any) {
  const post = {
    title: req.body.title,
    body: req.body.body,
  };

  const result = await createPost(post.title, post.body);
  return res.json({ message: 'пост создан успешно' }).status(200);
}

export async function getPosts(req: any, res: any) {
  const result = await getAllPosts();
  return res.json(result);
}

export async function getPost(req: any, res: any) {
  const post = {
    title: req.body.title,
    body: req.body.body,
  };

  const result = await getOnePost(post.title);
  return res.json(result);
}
