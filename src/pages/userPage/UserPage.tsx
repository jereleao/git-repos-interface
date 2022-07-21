import { Navigate, useParams } from 'react-router';
import styled from 'styled-components';
import { Footer, Link, Main } from '../../components/commom';
import { UserContent } from './UserContent';

export function UserPage() {
  let params = useParams();

  if (!params.userName) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Main>
        <UserContent userName={params.userName} />
      </Main>
      <Footer>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Footer>
    </>
  );
}
