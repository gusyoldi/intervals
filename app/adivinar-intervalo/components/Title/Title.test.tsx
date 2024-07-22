import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title", () => {
  test("should render title correctly", () => {
    render(<Title />);
    expect(screen.queryByText("Que intervalo es?"));
  });
});
