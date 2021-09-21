import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import './UserButtonsComponent.scss';

export const UserButtonsComponent = () => {
  const history = useHistory();
  const githubUsers: string[] = [
    'GrahamCampbell',
    'fabpot',
    'weierophinney',
    'rkh',
    'josh',
  ];

  return (
    <div className='db-buttons-container'>
      {githubUsers.map((user) => (
        <div key={user} className='db-user-button-container'>
          <Button
            variant='contained'
            onClick={() => history.push(`/person/${user}`)}
          >
            {user}
          </Button>
        </div>
      ))}
    </div>
  );
};
