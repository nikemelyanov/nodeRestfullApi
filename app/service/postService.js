var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import pool from '../database.js';
export function addPost(postTitle, postBody) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield pool.query('INSERT INTO posts(title, body) VALUES ($1, $2)', [postTitle, postBody]);
        }
        catch (err) {
            console.error(err);
        }
    });
}
export function deletePost(postId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = pool.query('DELETE FROM posts WHERE id = $1', [postId]);
        }
        catch (err) {
            console.error(err);
        }
    });
}
export function getPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield pool.query('SELECT * FROM public.posts');
            return res.rows;
        }
        catch (err) {
            console.error(err);
        }
    });
}
export function getPost(postTitle) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield pool.query('SELECT * FROM posts WHERE title = $1', [
                postTitle,
            ]);
            const user = res.rows[0];
            return user;
        }
        catch (err) {
            console.error(err);
        }
    });
}
