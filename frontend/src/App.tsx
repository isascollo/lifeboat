import React, { FunctionComponent } from "react";
import { Integration } from "./integrations/Integration";
import {Route, Routes, BrowserRouter as Router, Navigate} from "react-router-dom"; // Use BrowserRouter for client-side routing
import Login from "./components/Login/Login";

export interface AppProps {
  integration: Integration;
}

const App: FunctionComponent<AppProps> = ({ integration }) => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<Login integration={integration} />} />
      </Routes>
    </Router>
  );
};

export default App;
