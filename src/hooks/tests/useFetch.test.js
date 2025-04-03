/* eslint-disable no-undef */
import { renderHook } from "@testing-library/react";
import useFetch from "../useFetch";
import { jest } from "@jest/globals";

globalThis.fetch = jest.fn();

describe("useFetchedData", () => {
  it("should return the initial values for data, error and loading", async () => {
    const { result } = renderHook(() => useFetch());
    const { data, error, loading } = result.current;

    expect(data).toBe(null);
    expect(error).toBe(null);
    expect(loading).toBe(true);
  });
});
