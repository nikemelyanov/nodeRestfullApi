import jwt from 'jsonwebtoken';

import { postService } from '../../service/postsService.js';

class postControllerClass {
  async addPost(req: any, res: any) {
    const date = new Date();
    const formatedDate = date.toLocaleDateString();

    const post = {
      title: req.body.title,
      body: req.body.body,
      date: formatedDate,
    };

    const tokenWithPrefix = req.headers.authorization;
    const token = tokenWithPrefix.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'токен отсутствует' });
    }

    try {
      const decodedUser = jwt.verify(token, 'my sercret jwt');

      if (typeof decodedUser === 'object' && decodedUser !== null) {
        const create = await postService.createPost(
          post.title,
          post.body,
          decodedUser.id,
          `${decodedUser.firstname + ' ' + decodedUser.lastname}`,
          post.date,
          decodedUser.avatar
        );
      }

      return res.status(200).json({ message: 'пост создан успешно' });
    } catch (err) {
      return res.status(401).json({ message: 'неверный токен' });
    }
  }

  async getPosts(req: any, res: any) {
    const result = await postService.getAllPosts();;
    return res.json(result);
  }

  async getPost(req: any, res: any) {
    const post = {
      title: req.body.title,
    };

    const result = await postService.getOnePost(post.title);
    return res.json(result);
  }
}

export const postController = new postControllerClass();
