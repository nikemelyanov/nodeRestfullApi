import jwt from 'jsonwebtoken';

import { PostService } from '../services';

export class PostController {
  static async addPost(req: any, res: any) {
    const post = {
      title: req.body.title,
      body: req.body.body,
    };

    const tokenWithPrefix = req.headers.authorization;
    const token = tokenWithPrefix.split(' ')[1];

    if (!token) {
      return res.status(400).json({ message: 'токен отсутствует' });
    }

    try {
      const decoded_user = jwt.verify(token, 'my sercret jwt');

      if (typeof decoded_user === 'object' && decoded_user !== null) {
        const create = await PostService.createPost(
          post.title,
          post.body,
          decoded_user.id,
        );
      }

      return res.status(201).json({ message: 'пост создан успешно' });
    } catch (err) {
      return res.status(400).json({ message: 'неверный токен' });
    }
  }

  static async getPosts(req: any, res: any) {
    const result = await PostService.getAllPosts();
    return res.json(result);
  }

  static async getPost(req: any, res: any) {
    const post = {
      title: req.body.title,
    };

    const result = await PostService.getOnePost(post.title);
    return res.json(result);
  }
}