import { useNavigate } from 'react-router';
import { SearchInput } from '../../components';
import { Footer, Link, Main } from '../../components/commom';

export function Home() {
  let navigate = useNavigate();

  const handleSearch = (value: string) => {
    navigate(`/${value}`);
  };

  return (
    <>
      <Main>
        <p>Search for git-hub usernames:</p>
        <SearchInput onSearch={handleSearch} />
      </Main>
      <Footer>
        <Link to="/about">About</Link>
      </Footer>
    </>
  );
}
