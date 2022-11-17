import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import styles from "../styles/ResetPasswordSuccessfull.module.css";
import Link from "next/link";

const passwordResetSuccessfull = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className={styles.resetPwdSuccessContainer}>
        <div className={styles.resetPwdSuccessWrapper}>
          <img
            src="resetPwdSuccess.svg"
            alt=""
            className={styles.resetPwdHeaderImg}
          />
          <h3 className={styles.checkYourEmail}>Check your email</h3>
          <p className={styles.messageSentToYourEmail}>
            We sent a password reset link to example@cititasker.com
          </p>
          <button className={styles.submitButton} type="submit">
            Open mail app
          </button>
          <h5 className={styles.ResendLink}>
            Didn’t receive the email?
            <Link href="mail" className={styles.anchoLink}>
              Click to resend
            </Link>
          </h5>
        </div>
      </div>
    </>
  );
};

export default passwordResetSuccessfull;
