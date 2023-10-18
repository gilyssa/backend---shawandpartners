import express from 'express';
import UserController from '../controllers/UserController.js';

const userRoutes = express.Router();

userRoutes.get('/users', async (req, res) => {
  try {
    const users = await UserController.listUsers(req, res);
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar usuários do GitHub' });
  }
});

userRoutes.get('/users/:username/details', async (req, res) => {
  try {
    const userDetails = await UserController.getUserDetails(req, res);
    res.json(userDetails);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar detalhes do usuário do GitHub' });
  }
});

userRoutes.get('/users/:username/repos', async (req, res) => {
  try {
    const repositories = await UserController.getUserRepositories(req, res);
    res.json(repositories);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar repositórios do usuário do GitHub' });
  }
});

export default userRoutes;
