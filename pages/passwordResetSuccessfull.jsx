import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/PwdResetEmailSent.module.css";
import Head from "next/Head";

const passwordResetSuccessfull = () => {
  return (
    <>
      <Head>
        <title>CitiTasker | password Recover success</title>
        <meta name="description" content="CitiTasker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.resetPwdSuccessContainer}>
        <div className={styles.ResetPasswordWrapper}>
          <img
            src="resetPwdSuccess.svg"
            alt=""
            className={styles.resetPwdHeaderImg}
          />
          <h3 className={styles.checkYourEmail}>Password Reset</h3>
          <p className={styles.messageSentToYourEmail}>
            Your password have been successfully reset. Click continue to access
            you account.
          </p>
          <button className={styles.submitButton} type="submit">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default passwordResetSuccessfull;
