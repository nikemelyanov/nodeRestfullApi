import { UserService } from "../services";

export class UserController {
  static async updateAvatar(req: any, res: any) {
    const newData = {
      avatar: req.body.newAvatarPath,
      userId: req.body.userId,
    };
    const result = await UserService.updateAvatar(newData.avatar, newData.userId)

    return res.json({ message: "аватар успешно изменен." }).status(201)
  }
}
