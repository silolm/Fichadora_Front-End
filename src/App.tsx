import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { Routes } from "./Routes";
import theme from "./theme";
import { AuthProvider } from "./providers/authProvider";
import { ClockInOutProvider } from "./providers/clockInOutProvider";

//import "./App.css";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <ClockInOutProvider>
          <Router>
            <Routes/>
          </Router>
        </ClockInOutProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
