import { addPost, getPost, getPosts } from '../../service/postService.js';

export async function createPost(req: any, res: any) {
  const post = {
    title: req.body.title,
    body: req.body.body,
  };

  const createPost = await addPost(post.title, post.body);
  return res.json({ message: 'пост создан успешно' }).status(200);
}
