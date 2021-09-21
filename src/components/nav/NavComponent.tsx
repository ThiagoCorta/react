import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './NavComponent.scss';
import { useHistory, useLocation } from 'react-router';

export const NavComponent = () => {
  const history = useHistory();
  const location = useLocation();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          {location.pathname.includes('person') && (
            <Button color='inherit' onClick={() => history.push('/')}>
              <ArrowBackIosIcon />
              Back
            </Button>
          )}
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Home
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
