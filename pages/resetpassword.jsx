import Link from "next/link";
import React from "react";
import styles from "../styles/ResetPassword.module.css";
import Navbar from "../components/Navbar";
const Resetpassword = () => {
  return (
    <>
      <Navbar />
      <div className={styles.ResetPasswordContainer}>
        <div className={styles.ResetPasswordWrapper}>
          <h2>Reset Password</h2>
          <p className={styles.resetPasswordMessage}>
            Enter the email address associated with your Cititasker account and
            we’ll send you a link to reset your password right away.
          </p>
          <form action="" className={styles.ResetPasswordForm}>
            <div className={styles.inputContainer}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className={styles.resetEmailInput}
                placeholder="examplemail@cititasker.com"
              />
            </div>
            <button className={styles.submitButton} type="submit">
              Send Instructions
            </button>
          </form>
          <Link className={styles.goToLoginPage} href="/login">
            Return to Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Resetpassword;
