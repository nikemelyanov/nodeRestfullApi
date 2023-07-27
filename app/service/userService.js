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
export function createUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield pool.query('CREATE TABLE users (id serial PRIMARY KEY, email VARCHAR(50), password VARCHAR(50))');
            console.log(res);
        }
        catch (err) {
            console.error(err);
        }
        finally {
        }
    });
}
export function dropUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield pool.query('DROP TABLE IF EXISTS users');
        }
        catch (err) {
            console.error(err);
        }
    });
}
export function addUser(userEmail, userPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield pool.query('INSERT INTO users (email, password) VALUES ($1, $2)', [userEmail, userPassword]);
        }
        catch (err) {
            console.error(err);
        }
        finally {
        }
    });
}
export function deleteUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = pool.query('DELETE FROM users WHERE id = $1', [userId]);
        }
        catch (err) {
            console.error(err);
        }
        finally {
        }
    });
}
export function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield pool.query('SELECT * FROM users');
        }
        catch (err) {
            console.error(err);
        }
        finally {
        }
    });
}
export function getUser(userEmail) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield pool.query('SELECT * FROM users WHERE email = $1', [
                userEmail,
            ]);
            const user = res.rows[0];
            return user;
        }
        catch (err) {
            console.error(err);
        }
        finally {
        }
    });
}
