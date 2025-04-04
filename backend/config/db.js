console.log('DB_PASSWORD:', process.env.DB_PASSWORD, typeof process.env.DB_PASSWORD);
const { Pool } = require ('pg');

const pool = new Pool ({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432,
});

async function testConnection() {
    try {
        const client = await pool.connect();
        console.log('Database connected successfully!');
        await client.query(`
            CREATE TABLE IF NOT EXISTS symptoms (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL UNIQUE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
            `);

        console.log('Symptoms table created or already exists');
        client.release();
        } catch(err) {
            console.error('Database connection error:', err.stack);
        }
    }

module.exports = { pool, testConnection };