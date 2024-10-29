/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

it("App Router: Works with dynamic route segments", () => {
  const mockParams = Promise.resolve({ slug: "test-slug" });
  render(<Page params={mockParams} />);
  expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});
