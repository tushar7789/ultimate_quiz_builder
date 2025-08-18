import Grid from '@mui/material/Grid';
import Title from "@/components/Title";
import Quiz from '@/components/Quiz';


export default function Home() {

  return (
    <Grid container spacing={0}>
      <Grid
        container
        spacing={4}
        size={12}
        style={{
          // border: "1px solid purple", 
          height: "20vh"
        }}
        alignItems={'center'}
        justifyContent={'center'}
        direction='row'
      >
        <Title />
      </Grid>
      <Grid
        container
        size={12}
        style={{
          // border: "1px solid green", 
          height: "80vh"
        }}
        alignContent={'center'}
        justifyContent={'center'}
      >
        <Quiz />
      </Grid>
    </Grid>
  );
}
