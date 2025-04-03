/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import App from "../App";

describe("<App />", () => {
  test("Should render homepage", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
