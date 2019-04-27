import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { lightBlack } from "@material-ui/core/colors";
import RightPane from "./RightPane";
import LeftPane from "./LeftPane";

export default () => {
  const styles = {
    Paper: { padding: 20, textAlign: "center", margin: 10 }
  };
  return (
    <div>
      <Grid container>
        <Grid item sm={8}>
          <LeftPane styles={styles} />
        </Grid>
        <Grid item sm={4}>
          <RightPane styles={styles} />
        </Grid>
      </Grid>
    </div>
  );
};
