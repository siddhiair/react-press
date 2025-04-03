import React, { useState } from "react";
import Header from "../../components/header";
import WelcomeMessage from "../../components/welcome";

const Homepage = () => {
  const [posts, setPosts] = useState();
  return (
    <div>
      <Header />

      <div className="container py-4">
        <main className="">
          {posts?.length > 0 ? (
            <h1>Let's display posts</h1>
          ) : (
            <WelcomeMessage />
          )}
        </main>
      </div>
    </div>
  );
};

export default Homepage;
