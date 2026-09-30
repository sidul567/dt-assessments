export interface AuthField {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  autoComplete: string;
}

const EMAIL_FIELD: AuthField = {
  id: "email",
  name: "email",
  label: "Email",
  type: "email",
  placeholder: "designer@example.com",
  autoComplete: "email",
};

export const REGISTER_FIELDS: AuthField[] = [
  {
    id: "full-name",
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Jamie Davis",
    autoComplete: "name",
  },
  EMAIL_FIELD,
  {
    id: "password",
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "********",
    autoComplete: "new-password",
  },
];

export const LOGIN_FIELDS: AuthField[] = [
  EMAIL_FIELD,
  {
    id: "password",
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "********",
    autoComplete: "current-password",
  },
];
