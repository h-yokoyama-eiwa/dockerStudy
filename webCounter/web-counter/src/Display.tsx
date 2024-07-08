import Card from '@mui/material/Card';

interface DisplayProps {
  count: number;
  width: string;
  height: string;
}

export default function Display({ count, width, height }: DisplayProps) {
  return (
    <>
      <Card
        sx={{
          textAlign: 'center',
          backgroundColor: '#ffffff',
          width: {width},
          height: {height},
          margin: '0',
          padding: '0',
          border: 'inset',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
          {count}
      </Card>
    </>
  );
}
