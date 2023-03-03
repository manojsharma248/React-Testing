/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it should show two inout and button", () => {
  render(<UserForm />);
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when form is submitted", () => {
  const mock = jest.fn();
  render(<UserForm onUserAdd={mock} />);
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);

  user.click(nameInput);
  act(() => {
    user.keyboard("Manoj");
  });
  user.click(emailInput);
  act(() => {
    user.keyboard("manoj@gmail.com");
  });
  const button = screen.getByRole("button");
  user.click(button);
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "Manoj",
    email: "manoj@gmail.com",
  });
});
