import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { ThemeProvider } from "./contexts/ThemeProvider";
import Home from "./pages/Home";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Route path="/" exact component={Home} />
      </Router>
    </ThemeProvider>
  );
}
