import express from 'express';
import cors from 'cors';
import produkRoute from './routes/produkRoute.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use(produkRoute);
app.listen(5000, ()=> console.log('Server up and running...'));