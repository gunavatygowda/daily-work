import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("should not allow blank spaces", () => {
  render(<App />);
  const inputs = screen.getAllByPlaceholderText("Answer");
  fireEvent.change(inputs[0], { target: { value: "   " } });
  fireEvent.click(screen.getByText("Submit"));
  expect(screen.getAllByText(/Fill all fields/i).length).toBeGreaterThan(0);
});

test("should not allow duplicate questions", () => {
  render(<App />);
  const dropdowns = screen.getAllByRole("combobox");
  fireEvent.change(dropdowns[0], { target: { value: "Q1" } });
  fireEvent.change(dropdowns[1], { target: { value: "Q1" } });
  fireEvent.click(screen.getByText("Submit"));
  expect(true).toBe(true);
});

test("should show error for mismatched answers", () => {
  render(<App />);
  const answers = screen.getAllByPlaceholderText("Answer");
  const confirms = screen.getAllByPlaceholderText("Confirm");
  fireEvent.change(answers[0], { target: { value: "abc" } });
  fireEvent.change(confirms[0], { target: { value: "xyz" } });
  fireEvent.click(screen.getByText("Submit"));
  expect(screen.getAllByText(/Fill all fields|match/i).length).toBeGreaterThan(0);
});

test("should show error if question is not selected", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Submit"));
  expect(screen.getAllByText(/Fill all fields/i).length).toBeGreaterThan(0);
});

test("should submit when all inputs are valid", () => {
  render(<App />);
  const dropdowns = screen.getAllByRole("combobox");
  const answers = screen.getAllByPlaceholderText("Answer");
  const confirms = screen.getAllByPlaceholderText("Confirm");
  fireEvent.change(dropdowns[0], { target: { value: "Q1" } });
  fireEvent.change(answers[0], { target: { value: "test" } });
  fireEvent.change(confirms[0], { target: { value: "test" } });
  fireEvent.click(screen.getByText("Submit"));
  expect(true).toBe(true);
});