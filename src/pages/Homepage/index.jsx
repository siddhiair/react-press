import React from "react";
import WelcomeMessage from "../../components/welcome";
import { useAppContext } from "../../hooks/useAppContext";

const Homepage = () => {
  const { posts, loading, error } = useAppContext();

  if (loading) {
    return (
      <div className="container py-4">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div className="container py-4">
        <h1>Error: {error.message}</h1>
      </div>
    );
  }

  return (
    <div>
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
