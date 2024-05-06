import { Request, Response } from 'express';
import { CommentsServise } from '../services';
import jwt from 'jsonwebtoken';

export class CommentsController {
  static async getComments(req: any, res: any) {
    const postId = {
      id: req.query.postId,
    };

    const result = await CommentsServise.getComments(postId.id); // check type
    return res.json(result);
  }

  static async createComment(req: Request, res: Response) {
    const comment = {
      body: req.body.body,
      postId: req.body.postId,
    };

    const tokenWithPrefix = req.headers.authorization;
    if (!tokenWithPrefix) {
      return res.status(400).json({ message: 'токен отсутствует' });
    }
    const token = tokenWithPrefix.split(' ')[1];

    if (!token) {
      return res.status(400).json({ message: 'токен отсутствует' });
    }

    try {
      const decodedUser = jwt.verify(token, 'my sercret jwt');

      if (typeof decodedUser === 'object' && decodedUser !== null) {
        const create = await CommentsServise.createComment(
          comment.body,
          comment.postId,
          decodedUser.id,
        );
      }

      return res.status(201).json({ message: 'комментарий создан успешно' });
    } catch (err) {
      return res.status(400).json({ message: 'неверный токен' });
    }
  }
}
