import { userService } from '../../service/usersService.js';
import jwt from 'jsonwebtoken';

const secret = 'my sercret jwt';

class authControllerClass {
  async register(req: any, res: any) {
    const user = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      avatar: req.body.avatar,
    };
  
    const searchUserForDB = await userService.getUser(user.email);
    if (searchUserForDB) {
      return res
        .json({ message: 'пользователь уже зарегистрирован' })
        .status(400);
    }
  
    const registerUser = await userService.createUser(user);
    return res.json({ message: 'регистрация прошла успешно' }).status(200);
  }
  
  async login(req: any, res: any) {
    const user = {
      email: req.body.email,
      password: req.body.password,
    };
  
    const searchUser = await userService.getUser(user.email);
  
    if (!searchUser) {
      return res.status(401).json({ message: 'неправильный логин или пароль' }).status(200);
    }
    
    const payload = {
      id: searchUser.id,
      email: searchUser.email,
      firstname: searchUser.firstname,
      lastname: searchUser.lastname,
      avatar: searchUser.avatar,
    };
    console.log(payload);
  
    const token = jwt.sign(payload, secret);
    return res.status(200).json({ token: token });
  }
}

export const authController = new authControllerClass()
