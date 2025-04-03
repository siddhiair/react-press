import React from "react";
import styles from "../../styles/WelcomeMessage.module.css";

const WelcomeMessage = () => {
  return (
    <section>
      <div
        className={`container px-4 flex items-center justify-center ${styles.welcomeMessage}`}
      >
        <div className="sm:w-2/3 sm:max-w-[600px] text-center">
          <h1 className="font-bold text-3xl mb-4">
            Welcome to our ReactPress!
          </h1>
          <p className="mb-2">
            Simply enter the URL of any WordPress-powered website and retrieve
            the latest posts instantly. Whether you're exploring content or
            testing API integration, this tool makes it quick and effortless.{" "}
          </p>
          <p className="italic mb-3">
            Note: This tool only fetches posts of the "post" post type. Some
            websites may restrict API access, which could prevent fetching.
          </p>
          <p className="font-semibold">
            Start your search now and unlock fresh insights! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;
