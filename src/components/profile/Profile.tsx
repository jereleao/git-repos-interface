import React from 'react';
import styled from 'styled-components';
import { IUserData } from '../../interfaces';
import { Value } from '../commom';

interface IProfileProps extends IUserData {}

export const Profile: React.FC<IProfileProps> = ({
  login,
  avatar_url,
  name,
  company,
  location,
  bio,
  public_repos,
}) => {
  const Card = styled.div`
    display: flex;
    width: 50vw;
    margin: auto;
    margin-top: 1em;
    border: 1px solid gray;
    padding: 1em;
    border-radius: 10px;
  `;

  const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const Photo = styled.img`
    border-radius: 50%;
    height: 6em;
  `;

  const Name = styled.p`
    font-weight: bold;
    margin: 0.5em 0 0 0;
  `;

  // return <>{Object.entries(userData).map(userMapper)}</>;

  return (
    <Card>
      <FlexColumn>
        <Photo src={avatar_url} alt="Profile photo" />
        <Name>{name}</Name>
      </FlexColumn>
      <FlexColumn>
        <Value label="Bio" value={bio} />
        <Value label="Company" value={company} />
        <Value label="Locations" value={location} />
        <Value label="Public Repos" value={public_repos} />
      </FlexColumn>
    </Card>
  );
};
