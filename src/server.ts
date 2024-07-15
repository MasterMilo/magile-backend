import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import todosRoutes from './routes/todos';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api', todosRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});