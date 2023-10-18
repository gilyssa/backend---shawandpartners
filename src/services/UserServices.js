
import GitHubIntegration from '../integrations/GitHubIntegrations.js';

class UserServices {
  constructor(GitHubIntegration) {
    this.GitHubIntegration = GitHubIntegration;
  }
  async listUsers(since) {
    try {
      const users = await GitHubIntegration.listUsers(Number(since));
      if(!users.data) throw new Error('No users found');
      return users;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getUserDetails(username) {
    try {
      const userDetails = await GitHubIntegration.getUserDetails(username);
      return userDetails;
    } catch (error) {
      throw error;

    }
  }

  async getUserRepositories(username) {
    try {
      const repositories = await GitHubIntegration.getUserRepositories(username);
      return repositories;
    } catch (error) {
      throw error;
    }
  }
}

export default new UserServices();
