var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getUser, createUser } from '../../service/userService.js';
import jwt from 'jsonwebtoken';
const secret = 'my sercret jwt';
export function registerUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            avatar: req.body.avatar,
        };
        const searchUserForDB = yield getUser(user.email);
        if (searchUserForDB) {
            return res
                .json({ message: 'пользователь уже зарегистрирован' })
                .status(400);
        }
        const registerUser = yield createUser(user);
        return res.json({ message: 'регистрация прошла успешно' }).status(200);
    });
}
export function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = {
            email: req.body.email,
            password: req.body.password,
        };
        const searchUser = yield getUser(user.email);
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
    });
}
