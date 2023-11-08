import { CommentsServise } from '../../service/comments/';
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
    const date = new Date();
    const formatedDate = date.toLocaleDateString();

    const comment = {
      postId: req.body.postId,
      body: req.body.commentBody,
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
        const create = await CommentsServise.createComment(
          comment.body,
          comment.postId,
          decodedUser.id,
          `${decodedUser.firstname + ' ' + decodedUser.lastname}`,
          comment.date,
          decodedUser.avatar
        );
      }

      return res.status(201).json({ message: 'комментарий создан успешно' });
    } catch (err) {
      return res.status(401).json({ message: 'неверный токен' });
    }
  }
}
