import { render, screen, act } from "@testing-library/react";
import App from "./App";
import user from "@testing-library/user-event";

test("can receive a new user and show it on a list", () => {
  render(<App />);
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  user.click(nameInput);
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    user.keyboard("Manoj");
  });
  user.click(emailInput);
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => user.keyboard("manoj@gmail.com"));
  const button = screen.getByRole("button");
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => user.click(button));
  const name = screen.getByRole("cell", { name: "Manoj" });
  const email = screen.getByRole("cell", { name: "manoj@gmail.com" });
  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();

  // screen.debug();
});
