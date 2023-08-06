import { getUser, createUser } from '../../service/userService.js';
import jwt from 'jsonwebtoken';

const secret = 'my sercret jwt';

export async function registerUser(req: any, res: any) {
  const user = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    avatar: req.body.avatar,
  };

  const searchUserForDB = await getUser(user.email);
  if (searchUserForDB) {
    return res
      .json({ message: 'пользователь уже зарегистрирован' })
      .status(400);
  }

  const registerUser = await createUser(user);
  return res.json({ message: 'регистрация прошла успешно' }).status(200);
}

export async function loginUser(req: any, res: any) {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  const searchUser = await getUser(user.email);

  const payload = {
    email: searchUser.email,
    firstname: searchUser.firstname,
    lastname: searchUser.lastname,
    avatar: searchUser.avatar
  }

  if (!searchUser) {
    res.json({ message: 'неправильный логин или пароль' }).status(200);
  } else {
    console.log(payload); 
    const token = jwt.sign(payload, secret);
    return res.json({ token: token }).status(200);
  }
}
