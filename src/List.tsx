import noResults from "./assets/no_results.png";

import { ListProps } from "./types";

export const List = ({ users }: ListProps) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-2xl font-semibold">Users</h3>

      <div className="my-6">
        {users.length > 0 ? (
          <table className="table-wrapper">
            <thead>
              <tr>
                <th className="max-w-xs text-sm text-start text-gray-400">
                  Name
                </th>
                <th className="max-w-xs text-sm text-start text-gray-400">
                  Email
                </th>
              </tr>
            </thead>

            <tbody data-testid="users">
              {users.map((user, index: number) => (
                <tr key={index}>
                  <td className="max-w-xs">{user.name}</td>
                  <td className="max-w-xs">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="my-24 flex flex-col items-center justify-center gap-6">
            <img
              src={noResults}
              alt="No data"
              className="w-72 h-72 object-contain"
            />

            <span>No results found.</span>
          </div>
        )}
      </div>
    </div>
  );
};
