/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable jest/no-mocks-import */
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import { usersMock } from "../__mocks__";
import { App } from "../App";

describe("<App />", () => {
  it("can receive a new user and show on a list", () => {
    render(<App />);

    user.click(screen.getByRole("textbox", { name: /name/i }));
    user.keyboard(usersMock[0].name);

    user.click(screen.getByRole("textbox", { name: /email/i }));
    user.keyboard(usersMock[0].email);

    user.click(screen.getByRole("button"));

    expect(
      screen.getByRole("cell", { name: usersMock[0].name })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("cell", { name: usersMock[0].email })
    ).toBeInTheDocument();
  });
});
