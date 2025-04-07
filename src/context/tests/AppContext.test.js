/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import { AppProvider, AppContext } from "../AppContext";
import { useContext } from "react";

// Custom test component with the context values
const TestComponent = () => {
  const { posts, setPosts, loading, setLoading, error, setError } =
    useContext(AppContext);

  return (
    <div>
      <button onClick={() => setPosts([{ id: 1, title: "Test Post" }])}>
        Set Posts
      </button>
      <button onClick={() => setLoading(true)}>Set Loading</button>
      <button onClick={() => setError("Test error message")}>Set Error</button>

      <div data-testid="posts">
        {posts.length > 0 ? posts[0].title : "No posts"}
      </div>
      <div data-testid="loading">{loading ? "Loading..." : "Not Loading"}</div>
      <div data-testid="error">{error ? error : "No error"}</div>
    </div>
  );
};

describe("AppContext", () => {
  test("should provide initial context values", () => {
    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );
    expect(screen.getByTestId("posts")).toHaveTextContent("No posts");
    expect(screen.getByTestId("loading")).toHaveTextContent("Not Loading");
    expect(screen.getByTestId("error")).toHaveTextContent("No error");
  });

  test("should update context values when buttons are clicked", () => {
    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );

    fireEvent.click(screen.getByText("Set Posts"));
    fireEvent.click(screen.getByText("Set Loading"));
    fireEvent.click(screen.getByText("Set Error"));

    expect(screen.getByTestId("posts")).toHaveTextContent("Test Post");
    expect(screen.getByTestId("loading")).toHaveTextContent("Loading...");
    expect(screen.getByTestId("error")).toHaveTextContent("Test error message");
  });
});
