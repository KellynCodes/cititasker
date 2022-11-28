import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/PwdResetEmailSent.module.css";
import Link from "next/link";
import Head from "next/Head";

const emailVerification = () => {
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
          <h3 className={styles.checkYourEmail}>
            Verify your email to proceed
          </h3>
          <p className={styles.messageSentToYourEmail}>
            We sent a an activation email to
            <Link
              href="mailto:cititasker@gmail.com"
              className={styles.anchoLink}
            >
              example@cititasker.com.
            </Link>{" "}
            Click the link on your email to help us verify your account.
          </p>
          <button className={styles.submitButton} type="submit">
            Open mail app
          </button>
          <h5 className={styles.ResendLink}>
            Didn’t get the email?
            <Link href="mail" className={styles.anchoLink}>
              Click to resend
            </Link>
            <p>OR</p>
            <Link href="mail" className={styles.anchoLink}>
              Update your email address.
            </Link>
          </h5>
        </div>
      </div>
    </>
  );
};

export default emailVerification;
