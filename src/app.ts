import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

import path from 'path';

import mustache from 'mustache-express';

dotenv.config();

const app = express();

app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req:Request, res:Response) => {

    res.render('./pages/home')
})

app.listen(process.env.PORT, () => console.log('Server up and running.'));