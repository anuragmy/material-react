import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default () => {
  return (
    <div>
      <AppBar color="default">
        <Toolbar>
          <Typography variant="h6">Heading</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
