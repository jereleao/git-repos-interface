import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Profile, Repositories, SearchInput } from '../../components';
import { useGitHubProfile } from '../../hooks';

interface IUserContentProps {
  userName: string;
}

const Error = styled.p`
  color: red;
`;

export const UserContent: React.FC<IUserContentProps> = ({ userName }) => {
  let navigate = useNavigate();

  const handleSearch = (value: string) => {
    navigate(`/${value}`);
  };

  const { loading, error, userData, userRepos, setUserName } =
    useGitHubProfile();

  useEffect(() => {
    setUserName(userName);
  }, [userName]);

  return (
    <>
      <SearchInput onSearch={handleSearch} disabled={loading} />
      {error != null && <Error>{error}</Error>}
      {!loading && !error && (
        <>
          <Profile {...userData} />
          <Repositories repositories={userRepos} />
        </>
      )}
    </>
  );
};
