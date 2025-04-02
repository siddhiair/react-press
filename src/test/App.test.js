/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App.test.jsx", () => {
  test("Should have the 'Vite + React' text visible in the User Agent", () => {
    render(<App />);

    expect(screen.getByTestId("test")).toBeInTheDocument();
  });
});
