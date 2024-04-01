import { FunctionComponent, useState } from "react";
import { Integration } from "../../integrations/Integration";
import styles from "./Register.module.css";
import { RegistrationData } from "../../models/RegistrationModel";

interface RegisterProps {
  integration: Integration;
}

const Register: FunctionComponent<RegisterProps> = ({ integration }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
  });
  const [emailValid, setEmailValid] = useState<boolean>(true);
  const [mobileValid, setMobileValid] = useState<boolean>(true);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validatePassword = (password: string, confirmPassword: string) => {
    if (password.length < 8) {
      return "Password is less than 8 characters";
    }
    if (password !== confirmPassword) {
      return "Passwords do not match";
    }
    return "";
  };

  const handleSubmit = async () => {
    setEmailValid(/\S+@\S+\.\S+/.test(formData.email));
    const isAllDigits = formData.mobileNumber
      .trim()
      .split("")
      .every((char) => char >= "0" && char <= "9");
    const isValidLength = formData.mobileNumber.trim().length === 10;
    setMobileValid(isAllDigits && isValidLength);
    const passwordError = validatePassword(
      formData.password,
      formData.confirmPassword,
    );
    setPasswordErrorMessage(passwordError);

    if (emailValid && mobileValid && passwordError === "") {
      const requestData: RegistrationData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password, // Ensure this is handled securely
        mobileNumber: formData.mobileNumber,
      };

      try {
        await integration.registerUser(requestData);
        setSuccess(true);
      } catch (error) {
        // Log the error or display a message to the user
      }
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Header}>Register</div>
      <div className={styles.RegisterContainer}>
        <div className={styles.Name}>
          <input
            className={styles.InputField}
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <input
            className={styles.InputField}
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
        </div>
        {!emailValid && (
          <div className={styles.ErrorMessage}>Invalid Email</div>
        )}
        <input
          className={emailValid ? styles.InputField : styles.InputFieldError}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        {passwordErrorMessage !== "" && (
          <div className={styles.ErrorMessage}>{passwordErrorMessage}</div>
        )}
        <input
          className={
            passwordErrorMessage === ""
              ? styles.InputField
              : styles.InputFieldError
          }
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <input
          className={
            passwordErrorMessage === ""
              ? styles.InputField
              : styles.InputFieldError
          }
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />
        {!mobileValid && (
          <div className={styles.ErrorMessage}>Mobile is invalid</div>
        )}
        <input
          className={mobileValid ? styles.InputField : styles.InputFieldError}
          type="tel"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          placeholder="Mobile Number"
          required
        />
        <button
          className={styles.RegisterButton}
          onClick={handleSubmit}
          type="submit"
        >
          Register
        </button>
        {success && <div>Success</div>}
      </div>
    </div>
  );
};

export default Register;
