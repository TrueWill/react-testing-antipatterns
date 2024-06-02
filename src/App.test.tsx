import { afterEach, describe, expect, it } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  afterEach(cleanup);

  it("should render", () => {
    render(<App />);

    expect(
      screen.getByText("React Testing Library antipatterns"),
    ).not.toBeNull();
  });

  it("should be findable", () => {
    render(<App />);

    expect(screen.getByTestId("find-me")).not.toBeNull();
  });

  it("should be findable", () => {
    render(<App />);

    expect(screen.getByTestId("find-me")).not.toBeNull();
  });
});
