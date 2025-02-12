//http server with static files from folder dist
import express from 'express';
import cors from 'cors';
import path from 'path';
const app = express();
const port = 8080;
const __dirname = path.resolve();

app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


