import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { ThemeProvider } from "./contexts/ThemeProvider";
import Home from "./pages/Home";
import Local from "./pages/Local";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/local" exact component={Local} />
      </Router>
    </ThemeProvider>
  );
}
