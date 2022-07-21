import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { About, Home, UserPage } from './pages';

const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppWrapper>
      <h1>Git Repos!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:userName" element={<UserPage />} />
        <Route path="about" element={<About />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
