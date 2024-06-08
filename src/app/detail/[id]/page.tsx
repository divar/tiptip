import * as React from 'react';
import {Grid, Container, Paper} from '@mui/material';

export default function Detail() {
  return (
    <Container sx={{mt: 7}}>
      <Grid container justifyContent="center" spacing={5}>
        {[0, 1, 2].map((value) => (
          <Grid key={value} item>
            <Paper
              sx={{
                height:          400,
                width:           350,
                backgroundColor: "#fff",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
