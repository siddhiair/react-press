/* eslint-disable no-undef */
import { useAppContext } from "../useAppContext";
import { AppContext } from "../../context/AppContext";
import { renderHook } from "@testing-library/react";

describe("useAppContext", () => {
  test("should throw an error if used outside of AppProvider", () => {
    expect(() => {
      renderHook(() => useAppContext());
    }).toThrow("useAppContext must be used within an AppProvider");
  });

  test("should return the context value when used within AppProvider", () => {
    const mockContextValue = { user: "testUser" };

    const wrapper = ({ children }) => (
      <AppContext.Provider value={mockContextValue}>
        {children}
      </AppContext.Provider>
    );

    const { result } = renderHook(() => useAppContext(), { wrapper });

    expect(result.current).toEqual(mockContextValue);
  });
});
