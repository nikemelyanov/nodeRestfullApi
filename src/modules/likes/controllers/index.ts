import { Request, Response } from "express";
import { LikesService } from "../services";

export class LikesController {
  static async add(req: Request, res: Response) {
    const like = {
      postId: req.body.postId,
      userId: req.body.userId,
    };

    const result = await LikesService.add(like.postId, like.userId);

    res.status(201).json({ message: 'status ok!' });
  }
}
