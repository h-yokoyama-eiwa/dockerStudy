import React from 'react';
import './Counter.css';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Spacer } from './Spacer';

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <Grid container justifyContent={'center'}>
      <Grid item xs={6}>
        <Card
          className='card'
          sx={{
            minWidth: 600,
            maxWidth: 600,
            height: 300,
            backgroundColor: '#ffff00'
          }}
        >
          <Spacer size={30} />
          <Grid container justifyContent={'center'}>
            <Grid item xs={10}>
              <TextField
                className='text-field'
                variant="outlined"
                fullWidth
                defaultValue={count}
                type='number'
                inputProps={{
                  style: { textAlign: "center"}
                }}
                sx={{
                  backgroundColor: '#ffffff'
                }}
              />
            </Grid>
          </Grid>
          <Spacer size={100} />
          <Grid container justifyContent={'space-around'} alignItems={'end'}>
            <Grid item>
              <Button
                variant="contained"
                onClick={() => setCount(count + 1)}
              >
                  カウント
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained">リセット</Button>
            </Grid>
            <Grid item>
              <Button variant="contained">保存</Button>
            </Grid>
          </Grid>
        </Card>
    </Grid>
    </Grid>
  );
}

export default Counter;
