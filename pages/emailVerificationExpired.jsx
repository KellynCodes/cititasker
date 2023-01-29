import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import styles from "../styles/EmailVerificationExpired.module.css";
import Image from "next/image";

const emailVerificationExpired = () => {
  return (
    <>
      <Head>
        <title>CitiTasker | password Recover success</title>
        <meta name="description" content="CitiTasker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.emailVerificationExpiredContainer}>
        <div className={styles.emailVerificationExpired}>
          <Image
            src="/emailVerificationExpired.jpg"
            alt="emailMessage Box Image"
            className={styles.emailVerificationExpiredImage}
            width={72}
            height={16}
          />

          <div className={styles.MessagePart}>
            <div className={styles.MessagePartTop}>
              <h2>Email verification link has expired</h2>
              <p>
                Looks like the verification link has expired. Not to worry, we
                can send the link again
              </p>
            </div>
            <div className={styles.MessagePartBottom}>
              <a href="#" className={styles.ResendLinkButton}>
                Resend verification link
              </a>
              <p>
                <a href="#" className={styles.clickHere}>
                  Click here
                </a>
                if you did not receive the link in your inbox or if you would
                like to change the email address you signed up with
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default emailVerificationExpired;
