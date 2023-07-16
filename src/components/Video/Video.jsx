import { Box, Grid } from "@mui/material";
import { AgoraVideoPlayer } from "agora-rtc-react";
import "./index.css";

import { useState, useEffect } from "react";

export default function Video(props) {
  const { users, tracks } = props;
  const [gridSpacing, setGridSpacing] = useState(12);

  useEffect(() => {
    setGridSpacing(Math.max(Math.floor(12 / (users.length + 1)), 4));
  }, [users, tracks]);

  console.log(users);

  return (
    <Grid container style={{ height: "100%" }}>
      <Box height="100%" width="100%">
        <Grid
          item
          xs={gridSpacing}
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <AgoraVideoPlayer
            videoTrack={tracks[1]}
            style={{ height: "100%", width: "100%" }}
          />
        </Grid>
      </Box>
      {users.length > 0 &&
        users.map((user) => {
          if (user.videoTrack) {
            return (
              <div className="player">
                <h2>{user.uid}</h2>
                <Grid item xs={gridSpacing}>
                  <AgoraVideoPlayer
                    videoTrack={user.videoTrack}
                    key={user.uid}
                    style={{ height: "100%", width: "100%" }}
                  />
                </Grid>
              </div>
            );
          } else return null;
        })}
    </Grid>
  );
}
