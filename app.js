const express = require('express');
const app = express();

const increment = require('./increment');
const getAll = require('./getAll');

app.use(express.json());

app.get('/', async (_req, res) => {
    const result = await getAll();
    res.status(200).json(result);
});

app.post('/', async (req, res) => {
    const { num } = req.body;
    await increment(num);

    res.status(200).json('ok');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT);
console.log(`Api rodando na porta ${PORT}`);