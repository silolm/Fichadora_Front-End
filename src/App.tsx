import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { Routes } from "./Routes";
import theme from "./theme";
import { AuthProvider } from "./providers/authProvider";

//import "./App.css";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes/>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
