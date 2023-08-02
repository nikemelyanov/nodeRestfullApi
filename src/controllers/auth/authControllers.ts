import { getUser, addUser } from '../../service/userService.js';
import jwt from 'jsonwebtoken';

const secret = 'my sercret jwt';

export async function registerUser(req: any, res: any) {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  const searchUserForDB = await getUser(user.email);
  if (searchUserForDB) {
    return res
      .json({ message: 'пользователь уже зарегистрирован' })
      .status(400);
  }

  const registerUser = await addUser(user.email, user.password);
  return res.json({ message: 'регистрация прошла успешно' }).status(200);
}

export async function loginUser(req: any, res: any) {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };
  const searchUser = await getUser(user.email);

  if (!searchUser) {
    res.json({ message: 'неправильный логин или пароль' }).status(200);
  } else {
    console.log(searchUser);
    const tokenUser = jwt.sign(searchUser, secret);
    return res.json({ token: tokenUser }).status(200);
  }
}
