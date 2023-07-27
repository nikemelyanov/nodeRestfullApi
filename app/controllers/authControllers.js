var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getUser, addUser } from '../service/userService.js';
export function registerUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = {
            email: req.body.email,
            password: req.body.password,
        };
        const searchUserForDB = yield getUser(user.email);
        if (searchUserForDB) {
            return res
                .json({ message: 'пользователь уже зарегистрирован' })
                .status(400);
        }
        const registerUser = yield addUser(user.email, user.password);
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
            res.json({ message: 'неправильный логин или пароль' }).status(200);
        }
        else {
            res.json({ message: 'авторизация прошла успешно' }).status(200);
            console.log(searchUser);
            return searchUser;
        }
    });
}
