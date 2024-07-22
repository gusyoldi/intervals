import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Score from "./Score";

describe("Score", () => {
  test("should render score component correctly", () => {
    render(<Score />);

    expect(screen.queryByText("Correctas: 0"));
    expect(screen.queryByText("ncorrectas: 0"));
  });
});
