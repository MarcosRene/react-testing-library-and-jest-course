import { render, screen } from "@testing-library/react";

import user from "@testing-library/user-event";

import { Form } from "../Form";

const ownerProps = { add: jest.fn() };

describe("<Form />", () => {
  it("show two inputs and a button", () => {
    render(<Form />);

    expect(screen.getAllByRole("textbox")).toHaveLength(2);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("calls 'add' when the form is submitted", () => {
    render(<Form add={ownerProps.add} />);

    user.click(screen.getByRole("textbox", { name: /name/i }));
    user.keyboard("Jhon Doe");

    user.click(screen.getByRole("textbox", { name: /email/i }));
    user.keyboard("jhondoe@email.com");

    user.click(screen.getByRole("button"));

    expect(ownerProps.add).toHaveBeenCalled();
    expect(ownerProps.add).toHaveBeenCalledWith({
      name: "Jhon Doe",
      email: "jhondoe@email.com",
    });
  });

  it("empties the tow inputs when form is submitted", () => {
    render(<Form add={ownerProps.add} />);

    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });

    user.click(nameInput);
    user.keyboard("Jhon Doe");

    user.click(emailInput);
    user.keyboard("jhondoe@email.com");

    user.click(screen.getByRole("button"));

    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
  });
});
