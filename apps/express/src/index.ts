import express from 'express';
import { PORT} from '@repo/common/port';

const app = express();

app.get("/", (req, res) => {
    res.send('Hello From Server!')
})

app.listen(PORT), () => {
    console.log(`Server is running on PORT: ${PORT}`);
};