import React from 'react';
import './Counter.css';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Spacer } from './Spacer';
import Display from './Display';

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
              <Display count={0} width='100%' height='50px'/>
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
