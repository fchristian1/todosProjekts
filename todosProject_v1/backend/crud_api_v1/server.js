import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT_BACKEND || 3000;
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});