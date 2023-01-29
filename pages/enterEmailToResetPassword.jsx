import Link from "next/link";
import React from "react";
import styles from "../styles/ResetPassword.module.css";
import Navbar from "../components/Navbar";
import Head from "next/head";
const enterEmailToResetPassword = () => {
  return (
    <>
      <Head>
        <title>CitiTasker | password Recover success</title>
        <meta name="description" content="CitiTasker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.ResetPasswordContainer}>
        <div className={styles.ResetPasswordWrapper}>
          <h2>Reset Password</h2>
          <p className={styles.resetPasswordMessage}>
            Enter the email address associated with your Cititasker account and
            we’ll send you a link to reset your password right away.
          </p>
          <form action="" className={styles.EnterEmailPasswordForm}>
            <div className={styles.inputContainer}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                required
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

export default enterEmailToResetPassword;
