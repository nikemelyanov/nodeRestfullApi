import pg from 'pg';
const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'node_db',
    password: 'root',
    port: 5432,
});
export default pool;
