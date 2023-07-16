import { Box, Button, Card, Grid, Input, TextField } from "@mui/material";
import "./index.css";
import img from "./../../assets/woman.jpg";
import manImg from "./../../assets/man.jpg";

const Intro = ({ setInCall }) => {
  return (
    <Grid
      className="intro"
      style={{
        height: "100%",
        overflow: "hidden",
      }}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box textAlign="center" display="flex" flexDirection="column" zIndex={5}>
        <h1>Join Meeting Right Now And Enjoy</h1>
        <Box gap={2} display="flex" justifyContent="center">
          <Input placeholder="enter your name" />
          <Button
            style={{ marginTop: "1rem" }}
            size="large"
            variant="contained"
            onClick={() => setInCall(true)}
          >
            JOIN MEETING
          </Button>
        </Box>
      </Box>
      <div className="intro-image-wrapper">
        <img src={img} />
      </div>
      <div className="intro-image-wrapper-right">
        <img src={manImg} />
      </div>
      <div className="copyRight">developed with react & agora</div>
    </Grid>
  );
};
export default Intro;
