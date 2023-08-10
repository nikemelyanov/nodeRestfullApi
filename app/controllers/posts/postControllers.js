var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jwt from 'jsonwebtoken';
import { createPost, getOnePost, getAllPosts, } from '../../service/postService.js';
export function addPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const date = new Date();
        const formatedDate = date.toLocaleDateString();
        const post = {
            title: req.body.title,
            body: req.body.body,
            date: formatedDate
        };
        const tokenWithPrefix = req.headers.authorization;
        const token = tokenWithPrefix.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'токен отсутствует' });
        }
        try {
            const decodedUser = jwt.verify(token, 'my sercret jwt');
            if (typeof decodedUser === 'object' && decodedUser !== null) {
                const create = yield createPost(post.title, post.body, decodedUser.id, `${decodedUser.firstname + ' ' + decodedUser.lastname}`, post.date);
            }
            return res.status(200).json({ message: 'пост создан успешно' });
        }
        catch (err) {
            return res.status(401).json({ message: 'неверный токен' });
        }
    });
}
export function getPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield getAllPosts();
        return res.json(result);
    });
}
export function getPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const post = {
            title: req.body.title,
            body: req.body.body,
        };
        const result = yield getOnePost(post.title);
        return res.json(result);
    });
}
