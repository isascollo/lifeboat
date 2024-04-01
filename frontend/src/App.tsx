import React, { FunctionComponent } from "react";
import { Integration } from "./integrations/Integration";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom"; // Use BrowserRouter for client-side routing
import Landing from "./components/Landing/Landing";
import styles from "./App.module.css";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

export interface AppProps {
  integration: Integration;
}

const App: FunctionComponent<AppProps> = ({ integration }) => {
  return (
    <Router>
      <div className={styles.Container}>
        <Routes>
          <Route index element={<Landing integration={integration} />} />
          <Route
            path={"/register"}
            element={<Register integration={integration} />}
          />
          <Route
            path={"/login"}
            element={<Login integration={integration} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
