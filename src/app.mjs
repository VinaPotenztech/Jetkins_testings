import express from 'express';
import serverless from 'serverless-http';

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ message: 'API is healthy ✅' });
});

export const lambdaHandler = serverless(app);
