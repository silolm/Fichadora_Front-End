import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { Routes } from "./Routes";
import theme from "./theme";

//import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
