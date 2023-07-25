var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Express, { json } from 'express';
import pg from 'pg';
const app = Express();
const port = process.env.port || 3000;
app.use(json());
// db
const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'node_db',
    password: 'root',
    port: 5432,
});
function createUserTable() {
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
function dropUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield pool.query('DROP TABLE IF EXISTS users');
        }
        catch (err) {
            console.error(err);
        }
    });
}
function addUser(userEmail, userPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield pool.query('INSERT INTO users (email, password) VALUES ($1, $2)', [userEmail, userPassword]);
            console.log(res);
        }
        catch (err) {
            console.error(err);
        }
        finally {
        }
    });
}
function deleteUser(userId) {
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
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield pool.query('SELECT * FROM users');
            console.log(res.rows);
        }
        catch (err) {
            console.error(err);
        }
        finally {
        }
    });
}
function getUser(userEmail) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield pool.query('SELECT * FROM users WHERE email = $1', [userEmail]);
            return res.rows[0];
        }
        catch (err) {
            console.error(err);
        }
        finally {
        }
    });
}
//
app.get('/', (req, res) => {
    res.json({ hello: 'docker' });
});
app.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = {
        email: req.body.email,
        password: req.body.password,
    };
    const registerUser = yield addUser(user.email, user.password);
    res.json({ message: 'registration was successful' }).status(200);
}));
app.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = {
        email: req.body.email,
        password: req.body.password,
    };
    const searchUser = yield getUser(user.email);
    console.log(searchUser);
    res.json({ message: 'login success121212' }).status(200);
}));
app.listen(port, () => console.log(`app started in ${port} port`));
