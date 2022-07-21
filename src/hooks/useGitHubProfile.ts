import { useEffect, useState } from 'react';
import { IUserData, IUserRepo } from '../interfaces';

const EmptyUserData = {
  login: '',
  avatar_url: '',
  name: '',
  company: '',
  location: '',
  bio: '',
  public_repos: '',
};

export const useGitHubProfile = () => {
  const [userName, setUserName] = useState<undefined | string>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<IUserData>(EmptyUserData);
  const [userRepos, setUserRepos] = useState<IUserRepo[]>([]);

  useEffect(() => {
    if (userName) {
      fetchUserData(userName);
    }
  }, [userName]);

  const fetchUserData = async (userName: string) => {
    setLoading(true);
    setError(null);
    const response = await fetch(`https://api.github.com/users/${userName}`);
    switch (response.status) {
      case 200:
        setUserDataFromResponse(response);
        break;
      case 404:
        setError('User not found.');
        break;
      default:
        setError('An error has occurred!');
        break;
    }
    setLoading(false);
  };

  const fetchRepoData = async (repos_url: string, per_page = 100, page = 1) => {
    const response = await fetch(
      `${repos_url}?per_page=${per_page}&page=${page}`
    );
    if (response.status == 200) {
      const json = await response.json();
      setUserRepos(
        json.map(
          ({
            url,
            created_at,
            updated_at,
            description,
            disabled,
            name,
            private: privateRepo,
            releases_url,
          }: any) => ({
            url,
            created_at,
            updated_at,
            description,
            disabled,
            name,
            privateRepo,
            releases_url,
          })
        )
      );
    }
  };

  const setUserDataFromResponse = async (response: Response) => {
    const {
      login,
      avatar_url,
      name,
      company,
      location,
      bio,
      public_repos,
      repos_url,
    } = await response.json();

    setUserData({
      login,
      avatar_url,
      name,
      company,
      location,
      bio,
      public_repos,
    });

    fetchRepoData(repos_url);
  };

  return { loading, error, userData, userRepos, setUserName };
};
