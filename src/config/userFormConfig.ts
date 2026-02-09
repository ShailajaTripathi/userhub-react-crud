export interface FormField {
  name: keyof Omit<import("../types/user").User, "id">;
  label: string;
  type?: string;
  required?: boolean;
}

export const userFormConfig: FormField[] = [
  { name: "firstName", label: "First Name", required: true },
  { name: "lastName", label: "Last Name", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone Number", required: true }
];
