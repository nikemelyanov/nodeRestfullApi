import { Request, Response } from 'express';
import { UserService } from '../../users/services';
import jwt from 'jsonwebtoken';

const secret = 'my sercret jwt';

export class AuthController {
  static async register(req: Request, res: Response) {
    const user = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      avatar_path: req.body.avatar_path,
    };

    const searchUserForDB = await UserService.findByEmail(user.email);
    if (searchUserForDB) {
      return res
        .status(400)
        .json({ message: 'пользователь уже зарегистрирован' });
    }

    const registerUser = await UserService.createUser(user);
    return res.json({ message: 'регистрация прошла успешно' }).status(201);
  }

  static async login(req: Request, res: Response) {
    const user = {
      email: req.body.email,
      password: req.body.password,
    };

    const searchUser = await UserService.getUser(user.email, user.password);

    if (!searchUser) {
      return res.status(400).json({ message: 'неправильный логин или пароль' });
    }

    const payload = {
      id: searchUser.id,
      first_name: searchUser.first_name,
      last_name: searchUser.last_name,
      avatar_path: searchUser.avatar_path,
    };

    const token = jwt.sign(payload, secret);
    return res.status(200).json({ token: token });
  }
}
