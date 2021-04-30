import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { ThemeProvider } from "./contexts/ThemeProvider";
import Home from "./pages/Home";
import Local from "./pages/Local";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/local" exact component={Local} />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}
