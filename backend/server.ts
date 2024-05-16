import express, { Request, Response } from 'express';
import cors from 'cors';
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

interface UserData {
  firstName: string;
  lastName: string;
  dob: string;
  favoriteFruit: string;
}

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});

app.post('/api/generate-username', (req: Request, res: Response) => {
  const { firstName, lastName, dob, favoriteFruit }: UserData = req.body;  
  const username = generateUsername(firstName, lastName, dob, favoriteFruit);
  res.json({ username });
});

function generateUsername(firstName: string, lastName: string, dob: string, favoriteFruit: string): string {
  return `${firstName.toLowerCase()}_${lastName.toLowerCase()}_${favoriteFruit.toLowerCase()}${new Date(dob).getFullYear()}`;
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
