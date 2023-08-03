var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createPost, getOnePost, getAllPosts } from '../../service/postService.js';
export function addPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const post = {
            title: req.body.title,
            body: req.body.body,
        };
        const result = yield createPost(post.title, post.body);
        return res.json({ message: 'пост создан успешно' }).status(200);
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
