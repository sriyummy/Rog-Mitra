const { Pool } = require ('pg');

const pool = new Pool ({
    user: process.env.USER
})