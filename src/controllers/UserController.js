
import UserService  from '../services/UserServices.js';

class UserController {
  async listUsers(req, res) {
    const { since } = req.query;

    try {
      const users = await UserService.listUsers(since);
      return users;
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar usuários do GitHub' });
    }
  }

  async getUserDetails(req, res) {
    const { username } = req.params;

    try {
      const userDetails = await UserService.getUserDetails(username);
      return userDetails;
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar detalhes do usuário do GitHub' });
    }
  }

  async getUserRepositories(req, res) {
    const { username } = req.params;

    try {
      const repositories = await UserService.getUserRepositories(username);
      return repositories;
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar repositórios do usuário do GitHub' });
    }
  }
}

export default new UserController();
