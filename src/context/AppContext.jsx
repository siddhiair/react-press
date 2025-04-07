import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <AppContext.Provider
      value={{ posts, setPosts, loading, setLoading, error, setError }}
    >
      {children}
    </AppContext.Provider>
  );
};
