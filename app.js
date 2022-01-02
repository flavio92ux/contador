const express = require('express');
const app = express();
const cors = require('cors');

const increment = require('./increment');
const getAll = require('./getAll');

app.use(express.json());
app.use(cors());

app.get('/', async (_req, res) => {
    const result = await getAll();
    res.status(200).json(result);
});

app.post('/', async (_req, res) => {
    const result = await getAll();

    await increment(result[0].number + 1);

    const updatedNumber = await getAll();

    res.status(200).json(updatedNumber);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT);
console.log(`Api rodando na porta ${PORT}`);