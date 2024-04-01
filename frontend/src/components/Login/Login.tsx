import { FunctionComponent } from "react";
import { Integration } from "../../integrations/Integration";
import styles from "./Login.module.css";

interface LoginProps {
  integration: Integration;
}

const Login: FunctionComponent<LoginProps> = ({ integration }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Header}>Login</div>
    </div>
  );
};

export default Login;
