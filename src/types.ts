export interface UserProps {
  name: string;
  email: string;
}

export interface FormProps {
  add?: (newValue: UserProps) => void;
}

export interface ListProps {
  users: UserProps[];
}
