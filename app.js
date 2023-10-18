import express from 'express';
import cors from 'cors';
import userRoutes from './src/routes/userRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
