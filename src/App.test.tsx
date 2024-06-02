import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render", () => {
    render(<App />);

    expect(
      screen.getByText("React Testing Library antipatterns"),
    ).not.toBeNull();
  });
});
