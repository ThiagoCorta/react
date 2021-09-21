import { Avatar, Card, CardHeader, Container, Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ParamsType, Person } from './models/PersonModels';
import Grid from '@mui/material/Grid';
import './PersonComponent.scss';

export const PersonComponent = () => {
  const params = useParams<ParamsType>();
  const [personData, setPersonData] = useState<Person>();

  useEffect(() => {
    if (!params.id) return;
    fetch(`https://api.github.com/users/${params.id}`)
      .then((response) => response.json())
      .then((user) => setPersonData(user))
      .catch((error) => console.error(error));
  }, [params]);

  return (
    <Container maxWidth='lg' className='db-person-container'>
      <Grid container>
        <Grid item xs={12}>
          <Card elevation={0}>
            <CardHeader
              avatar={<Avatar src={personData?.avatar_url} />}
              title={personData?.name}
              subheader={personData?.location}
            />
          </Card>
          <Divider />
        </Grid>
      </Grid>
    </Container>
  );
};
