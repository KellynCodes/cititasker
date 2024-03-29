import styles from "../styles/ResetPassword.module.css";
import Navbar from "./Navbar";
import { useState, React } from "react";
import Head from "next/head";
import Image from "next/image";

const ResetPassword = () => {
  const [password, setPassword] = useState(true);
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(true);
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const validateInput = () => {
    if (passwordInput.trim() == "" && confirmPasswordInput.trim() == "") {
      setError(true);
      setMessage("Field is empty");
      setTimeout(() => {
        setError(false);
        setMessage("");
      }, 2000);
    }
    if (passwordInput.trim() != confirmPasswordInput.trim()) {
      setError(true);
      setMessage("Password do not match!");
      setTimeout(() => {
        setError(false);
        setMessage("");
      }, 2000);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>CitiTasker | password Recovery</title>
        <meta name="description" content="CitiTasker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.ResetPasswordContainer}>
        <div className={styles.ResetPasswordWrapper}>
          <h2>Set new Password</h2>
          <p className={styles.resetPasswordMessage}>
            Your password must be different from the previous.
          </p>
          <form
            action=""
            className={styles.ResetPasswordForm}
            onSubmit={handleSubmit}
          >
            <div className={styles.inputContainer}>
              <label htmlFor="password">Password</label>
              <input
                type={password ? "password" : "text"}
                className={styles.resetEmailInput}
                value={passwordInput}
                required
                placeholder="Enter new password"
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                }}
              />
              <Image
                src={password ? "/eye-slash-fill.svg" : "/eye.svg"}
                alt="hide-password"
                className={styles.hidePassword}
                onClick={() =>
                  password ? setPassword(false) : setPassword(true)
                }
                width={72}
                height={16}
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type={confirmPassword ? "password" : "text"}
                className={styles.resetEmailInput}
                value={confirmPasswordInput}
                required
                placeholder="Confirm"
                onChange={(e) => {
                  setConfirmPasswordInput(e.target.value);
                }}
              />
              <Image
                src={confirmPassword ? "/eye-slash-fill.svg" : "/eye.svg"}
                alt="hide-password"
                className={styles.hidePassword}
                onClick={() =>
                  confirmPassword
                    ? setConfirmPassword(false)
                    : setConfirmPassword(true)
                }
                width={72}
                height={16}
              />
            </div>
            <div className={error ? "errorMessage" : "noError"}>{message}</div>
            <button
              className={styles.submitButton}
              onClick={validateInput}
              type="submit"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
