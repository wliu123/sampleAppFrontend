import Navbar from "./components/Navbar";
import Student from "./components/Student";
import Grid from '@mui/material/Grid';
import "./App.css"


function App() {
  return (
    <>
     <Navbar />
      <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{bgcolor:"grey"}}
      >
     <Student />

      </Grid>

    </>
  );
}

export default App;
