import { CommentsServise } from '../../service/comments';
import jwt from 'jsonwebtoken';

export class CommentsController {
  static async getComments(req: any, res: any) {
    const postId = {
      id: req.body.postId,
    };

    const result = await CommentsServise.getComments(postId.id);
    return res.json(result);
  }

  static async createComment(req: any, res: any) {
    const comment = {
      body: req.body.body,
      postId: req.body.postId
    };

    const tokenWithPrefix = req.headers.authorization;
    const token = tokenWithPrefix.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'токен отсутствует' });
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
      return res.status(401).json({ message: 'неверный токен' });
    }
  }
}
