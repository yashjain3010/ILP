import express from "express";
import userRoutes from './routes/index';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api',userRoutes);

app.listen(3000);