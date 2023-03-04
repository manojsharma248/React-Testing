import { screen, render, within } from "@testing-library/react";
import UserList from "./UserList";

test("render 1 row per user", () => {
  const users = [
    { name: "John", email: "john@gmail.com" },
    { name: "Manoj", email: "manoj@gmail.com" },
  ];
  render(<UserList users={users} />);
  // screen.logTestingPlaygroundURL();
  const rows = within(screen.getByTestId("users")).getAllByRole("row");
  expect(rows).toHaveLength(2);
});
test("render the name and email of each user", () => {
  const users = [
    { name: "John", email: "john@gmail.com" },
    { name: "Manoj", email: "manoj@gmail.com" },
  ];
  render(<UserList users={users} />);
  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
