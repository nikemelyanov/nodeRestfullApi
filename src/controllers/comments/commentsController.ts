import { CommentsServise } from '../../service/commentsService.js';

class CommentsControllerClass {
  
  async getComments(req: any, res: any) {
    const post = {
      id: req.body.postId,
    };

    const result = await CommentsServise.getComments(post.id);
    return res.json(result);
  }
}

export const CommentsController = new CommentsControllerClass();
