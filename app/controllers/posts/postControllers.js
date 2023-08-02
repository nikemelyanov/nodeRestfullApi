var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { addPost, getPost, getPosts } from '../../service/postService.js';
export function createPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const post = {
            title: req.body.title,
            body: req.body.body,
        };
        const createPost = yield addPost(post.title, post.body);
        return res.json({ message: 'пост создан успешно' }).status(200);
    });
}
export function getOnePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const post = {
            title: req.body.title,
            body: req.body.body,
        };
        const searchPost = yield getPost(post.title);
        return res.json(searchPost);
    });
}
export function getAllPost() {
    return __awaiter(this, void 0, void 0, function* () {
        const searchPosts = yield getPosts();
        console.log(searchPosts);
    });
}
