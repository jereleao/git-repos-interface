import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 0.8em 0;
`;

interface IFooterProps {
  children?: React.ReactNode;
}

export const Footer: React.FC<IFooterProps> = ({ children }) => {
  return (
    <FooterWrapper>
      © Git Repos
      {children}
    </FooterWrapper>
  );
};
