import pg from 'pg';

const pool = new pg.Pool({
  user: 'root',
  host: 'localhost',
  database: 'docker_db',
  password: 'root',
  port: 5433,
});

export default pool;
