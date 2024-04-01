import { FunctionComponent } from "react";
import { Integration } from "../../integrations/Integration";
import styles from "./Landing.module.css";
import { useNavigate } from "react-router-dom";

interface LandingProps {
  integration: Integration;
}

const Landing: FunctionComponent<LandingProps> = ({ integration }) => {
  let navigate = useNavigate();

  return (
    <div className={styles.Container}>
      <div className={styles.Header}>Lifeboat</div>
      <div className={styles.Buttons}>
        <button
          className={styles.LoginButton}
          onClick={() => navigate("/register")}
        >
          Register
        </button>
        <button
          className={styles.LoginButton}
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Landing;
