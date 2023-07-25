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

async function createUserTable() {
  try {
    const res = await pool.query(
      'CREATE TABLE users (id serial PRIMARY KEY, email VARCHAR(50), password VARCHAR(50))'
    );
    console.log(res);
  } catch (err) {
    console.error(err);
  } finally {
  }
}
async function dropUserTable() {
  try {
    const res = await pool.query('DROP TABLE IF EXISTS users');
  } catch (err) {
    console.error(err);
  }
}

async function addUser(userEmail: string, userPassword: string) {
  try {
    const res = await pool.query(
      'INSERT INTO users (email, password) VALUES ($1, $2)',
      [userEmail, userPassword]
    );
    console.log(res);
  } catch (err) {
    console.error(err);
  } finally {
  }
}
async function deleteUser(userId: number) {
  try {
    const res = pool.query('DELETE FROM users WHERE id = $1', [userId]);
  } catch (err) {
    console.error(err);
  } finally {
  }
}
async function getUsers() {
  try {
    const res = await pool.query('SELECT * FROM users');
    console.log(res.rows);
  } catch (err) {
    console.error(err);
  } finally {
  }
}
async function getUser(userEmail: number) {
  try {
    const res = await pool.query('SELECT * FROM users WHERE email = $1', [userEmail]);
    return res.rows[0]
  } catch (err) {
    console.error(err);
  } finally {
  }
}
//

app.get('/', (req, res) => {
  res.json({ hello: 'docker' });
});

app.post('/register', async (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };
  const registerUser = await addUser(user.email, user.password);
  res.json({ message: 'registration was successful' }).status(200);
});

app.post('/login', async (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };
  const searchUser = await getUser(user.email)
  console.log(searchUser)

  res.json({ message: 'login success' }).status(200);
});

app.listen(port, () => console.log(`app started in ${port} port`));
