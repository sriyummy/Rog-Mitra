require ('dotenv').config();
const express = require ('express');
const { pool, testConnection } = require ('../config/db');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.checkout('/', (req, res) => {
    res.send('Rog Mitra Backend is running!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    testConnection();
});