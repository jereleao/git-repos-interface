import React from 'react';
import styled from 'styled-components';
import { IUserRepo } from '../../interfaces';
import { Repository } from './Repository';

interface IRepositoriesProps {
  repositories: IUserRepo[];
}
export const Repositories: React.FC<IRepositoriesProps> = ({
  repositories,
}) => {
  const ReposWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;

  return (
    <ReposWrapper>
      {repositories.map((value, index) => {
        return <Repository {...value} key={index} />;
      })}
    </ReposWrapper>
  );
};
