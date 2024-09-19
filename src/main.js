import express from 'express';
import cors from 'cors';

const app = express()
app.use(cors())
const port = 3000

app.get('/', async (req, res) => {
    const word = Math.random()
    .toString(36).substring(2, 15) + 
    Math.random().toString(36)
    .substring(2, 15);
    const newWord = word.replace(/[0-9]/g, '');
    res.status(200).json({ data: newWord })
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
