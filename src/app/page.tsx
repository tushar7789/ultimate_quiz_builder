import Grid from '@mui/material/Grid';
import Title from "@/components/Title";
import Quiz from '@/components/Quiz';

export default function Home() {
  return (
    <Grid container spacing={0}>
      <Grid
        size={24}
        style={{ border: "1px solid purple", height: "20vh" }}
        alignItems={'center'}
        justifyItems={'center'}
        direction='row'
      >
        <Title />
      </Grid>
      <Grid
        size={12}
        style={{ border: "1px solid green", height: "80vh" }}
        alignContent={'center'}
        justifyItems={'center'}
      >
        <Quiz />
      </Grid>
    </Grid>
  );
}
