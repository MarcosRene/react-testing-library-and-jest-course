import { useState } from "react";
import { Form } from "./Form";
import { List } from "./List";
import { UserProps } from "./types";

export const App = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  const add = (newUser: UserProps) => setUsers([...users, newUser]);

  return (
    <main className="h-screen flex flex-col lg:flex-row">
      <div className="w-full py-12 lg:py-0 lg:w-[50%] bg-slate-200 flex items-center justify-center">
        <Form add={add} />
      </div>

      <div className="p-8 w-full lg:w-[50%]">
        <List users={users} />
      </div>
    </main>
  );
};
