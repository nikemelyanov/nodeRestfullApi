import { LikesService } from "../services";

export class LikesController {
  static async add(req: any, res: any) {
    const like = {
      postId: req.body.postId,
      userId: req.body.userId,
    };

    const result = await LikesService.add(like.postId, like.userId);

    res.status(201).json({ message: 'status ok!' });
  }
}
