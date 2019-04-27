import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Middle from "./components/Middle";
import { exercises, muscles } from "./components/Store";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

export default class App extends React.Component {
  state = {
    exercises
  };

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Header />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <Middle />
          <Footer muscles={muscles} />
        </MuiThemeProvider>
      </div>
    );
  }
}
