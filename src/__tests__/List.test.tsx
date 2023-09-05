/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable jest/no-mocks-import */
import { render, screen, within } from "@testing-library/react";

import { usersMock } from "../__mocks__";
import { List } from "../List";

describe("<List />", () => {
  it("render one row per user", () => {
    render(<List users={usersMock} />);

    expect(
      within(screen.getByTestId("users")).getAllByRole("row")
    ).toHaveLength(5);
  });

  it("render the email and name of each user", () => {
    render(<List users={usersMock} />);

    for (let user of usersMock) {
      expect(screen.getByRole("cell", { name: user.name })).toBeInTheDocument();
      expect(
        screen.getByRole("cell", { name: user.email })
      ).toBeInTheDocument();
    }
  });
});
