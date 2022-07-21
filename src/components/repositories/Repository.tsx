import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IUserRepo } from '../../interfaces';
import { Value } from '../commom';

interface IRepositoryProps extends IUserRepo {}

export const Repository: React.FC<IRepositoryProps> = ({
  url,
  created_at,
  updated_at,
  description,
  name,
}) => {
  const RepoCard = styled.div`
    width: 35vw;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 2px;
    padding: 1px;
    font-size: 0.9em;
  `;

  return (
    <RepoCard>
      <Value label="Nome" value={<Link to={url}>{name}</Link>} />
      <Value label="Descrição" value={description} />
      <Value label="Última atualização" value={updated_at} />
      <Value label="Criado em" value={created_at} />
    </RepoCard>
  );
};
