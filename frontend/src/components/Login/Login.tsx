import { FunctionComponent, useState } from "react";
import { Integration } from "../../integrations/Integration";
import styles from "./Login.module.css";

interface LoginProps {
  integration: Integration;
}

const Login: FunctionComponent<LoginProps> = ({ integration }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loginValid, setLoginValid] = useState<boolean>(true);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const requestData = {
      email: formData.email,
      password: formData.password,
    };
    /// add login logic
  };
  return (
    <div className={styles.Container}>
      <div className={styles.Header}>Login</div>
      <div className={styles.LoginContainer}>
        <input
          className={loginValid ? styles.InputField : styles.InputFieldError}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          className={loginValid ? styles.InputField : styles.InputFieldError}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button
          className={styles.LoginButton}
          onClick={handleSubmit}
          type="submit"
        >
          Login
        </button>
        {success && <div>Success</div>}
      </div>
    </div>
  );
};

export default Login;
