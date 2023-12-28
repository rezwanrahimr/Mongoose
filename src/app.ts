import express, { Request, Response } from 'express';
import cors from 'cors';
/* 
 * Step 1 - Create Interface
 * Step 2 - Create Schema
 * Step 3 - Model
 * Step 3 - Connect To Database
 */
const app = express()

// cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

export default app;