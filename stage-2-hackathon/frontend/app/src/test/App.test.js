import { render, screen } from "@testing-library/react";
import App from "../App";

test("submit button should be disabled initially", () => {
  render(<App />);
  const button = screen.getByText("Submit");
  expect(button).toBeDisabled();
});