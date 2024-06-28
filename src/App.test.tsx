import { afterEach, describe, expect, it } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import App from "./App";
import { act, useEffect, useState } from "react";

global.IS_REACT_ACT_ENVIRONMENT = false;

describe("App", () => {
  afterEach(cleanup);

  describe("Inaccessible", () => {
    it("should be findable", () => {
      render(<App />);

      expect(screen.getByTestId("find-me")).not.toBeNull();
    });

    it("should be queryable", () => {
      const { container } = render(<App />);

      container.querySelector(".my-class");

      expect(container.querySelector(".my-class")).not.toBeNull();
    });
  });

  describe("Act", () => {
    it("should not need act", async () => {
      render(<App />);

      const button = screen.getByRole("button", { name: /click me/i });

      // I tried to create an example that would give the "not wrapped in act" warning
      // but never saw it.

      act(() => {
        fireEvent.click(button);
      });

      expect(await screen.findByText("done")).not.toBeNull();
    });
  });

  it("should render", () => {
    render(<App />);

    expect(
      screen.getByText("React Testing Library antipatterns"),
    ).not.toBeNull();
  });
});
