import { Container } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './HomeComponent.scss';
import { UserButtonsComponent } from './users/UserButtonsComponent';

export const HomeComponent = () => {
  return (
    <Container maxWidth='lg' className='db-home-container'>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h5' color='initial'>
            Top 5 GitHub Users
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='subtitle1' color='initial'>
            Tap the username to see more information
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <UserButtonsComponent />
        </Grid>
      </Grid>
    </Container>
  );
};
