import { useState } from "react";
import VideoCall from "./VideoCall";
import { Button } from "@mui/material";
import Intro from "./components/Intro/Intro";

function App() {
  const [inCall, setInCall] = useState(false);

  return (
    <div className="App" style={{ height: "100%" }}>
      {inCall ? (
        <VideoCall setInCall={setInCall} userName="aida" />
      ) : (
        <Intro setInCall={setInCall} />
      )}
    </div>
  );
}

export default App;
