import express from 'express';
import dotenv from 'dotenv';

import path from 'path';

import mustache from 'mustache-express';

dotenv.config();

const app = express();

app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

app.get('/', (req, res) => {

    res.render('./pages/home')
})

app.listen(process.env.PORT, () => console.log('Server up and running.'));