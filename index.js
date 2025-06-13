import express from 'express';
const app = express();

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).send({ status: 'OK' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
export default app;
