import { afterEach, describe, expect, it } from "vitest";
import {
  render,
  screen,
  // I ran into issues without this.
  // eslint-disable-next-line testing-library/no-manual-cleanup
  cleanup,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  afterEach(cleanup);

  describe("Inaccessible", () => {
    it("should be findable", () => {
      render(<App />);

      // Not perfect but better
      expect(
        screen.getByText(/not particularly accessible/i),
      ).toBeInTheDocument();
    });
  });

  describe("Act", () => {
    it("should not need act", async () => {
      // Invoke before calling render
      const user = userEvent.setup();
      render(<App />);

      const button = screen.getByRole("button", { name: /click me/i });
      await user.click(button);

      expect(await screen.findByText(/done/i)).toBeInTheDocument();
    });
  });

  describe("Screen", () => {
    it("should use screen", () => {
      render(<App />);

      expect(
        screen.getByText(/react testing library antipatterns/i),
      ).toBeInTheDocument();
    });
  });

  describe("FindBy", () => {
    it("should use find queries", async () => {
      const user = userEvent.setup();
      render(<App />);

      const button = screen.getByRole("button", { name: /click me/i });
      await user.click(button);

      expect(await screen.findByText(/done/i)).toBeInTheDocument();
    });
  });

  describe("Best query", () => {
    it("should use the right query", () => {
      render(<App />);

      const button = screen.getByRole("button", { name: /click me/i });

      expect(button).toBeInTheDocument();
    });
  });
});
