import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

import path from 'path';

import mustache from 'mustache-express';

import Routes from './routes'

dotenv.config();

const app = express();

app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../public')));

app.use(Routes)

app.listen(process.env.PORT, () => console.log('Server up and running.'));