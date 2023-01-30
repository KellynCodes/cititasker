import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/PwdResetEmailSent.module.css";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const passwordResetEmailSent = () => {
  return (
    <>
      <Head>
        <title>CitiTasker | password Reset success</title>
        <meta name="description" content="CitiTasker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.PwdResetEmailSentContainer}>
        <div className={styles.PwdResetEmailSentWrapper}>
          <Image
            src="/resetPwdSuccess.svg"
            alt="Recet_password_successfull_img"
            className={styles.pwdResetSuccessImg}
            width={700}
            height={500}
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

export default passwordResetEmailSent;
