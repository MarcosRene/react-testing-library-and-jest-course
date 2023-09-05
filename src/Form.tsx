import { ChangeEvent, FormEvent, useState } from "react";
import { FormProps, UserProps } from "./types";

interface FormDataProps extends UserProps {}

const initialState: FormDataProps = {
  email: "",
  name: "",
};

export const Form = ({ add }: FormProps) => {
  const [values, setValues] = useState<FormDataProps>(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (add) add(values);
    setValues({ name: "", email: "" });
  };

  const isFormValid = Object.values(values).every((value) => value !== "");

  return (
    <form
      onSubmit={handleSubmit}
      className="py-14 px-12 w-[24rem] min-h-[28rem] bg-white rounded-lg shadow-2xl flex flex-col gap-4"
    >
      <div className="flex flex-col justify-items-start gap-2">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="John Doe"
          className="p-3 border-2 border-slate-300 rounded-lg transition ease-in-out delay-180 outline-none focus:border-slate-400"
        />
      </div>

      <div className="flex flex-col justify-items-start gap-2">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="johndoe@gmail.com"
          className="p-3 border-2 border-slate-300 rounded-lg transition ease-in-out delay-180 outline-none focus:border-slate-400"
        />
      </div>

      <button
        type="submit"
        className={`w-full p-3 mt-auto rounded-lg ${
          isFormValid
            ? "bg-slate-800 text-white hover:bg-slate-900"
            : "bg-slate-300 text-gray-500 cursor-not-allowed"
        } transition ease-in-out delay-180`}
        disabled={!isFormValid}
      >
        Submit
      </button>
    </form>
  );
};
