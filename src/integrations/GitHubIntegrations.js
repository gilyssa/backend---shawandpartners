import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

class GitHubIntegrations {
  async listUsers(since) {
    try {
      const response = await axios.get(`${GITHUB_API_BASE_URL}/users`, {
        params: { since, per_page: 2 },
      });

      if (response.status !== 200) {
        throw new Error('Failed to call the GitHub API');
      }

      const linkHeader = response.headers.link;
      const nextUrlMatch = /<([^>]*)>; rel="next"/.exec(linkHeader);
      const nextUrlIndex = 1;
      const nextUrl = nextUrlMatch[nextUrlIndex];

      return { data: response.data, nextPage: nextUrl };
    } catch (error) {
      throw error;
    }
  }
  async getUserDetails(username) {
    try {
      const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${username}`);

      if (response.status !== 200) {
        throw new Error('Failed to call the GitHub API');
      }

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getUserRepositories(username) {
    try {
      const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${username}/repos`);

      if (response.status !== 200) {
        throw new Error('Failed to call the GitHub API');
      }

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new GitHubIntegrations();
