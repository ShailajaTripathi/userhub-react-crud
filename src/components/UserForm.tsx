import { useState, useEffect } from "react";
import { TextField, Button, Stack } from "@mui/material";
import { userFormConfig } from "../config/userFormConfig";
import type { User } from "../types/user";

interface Props {
  onSubmit: (user: User) => void;
  selectedUser?: User | null;
}

const emptyUser: User = {
  firstName: "",
  lastName: "",
  email: "",
  phone: ""
};

export default function UserForm({ onSubmit, selectedUser }: Props) {
  const [formData, setFormData] = useState<User>(emptyUser);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (selectedUser) setFormData(selectedUser);
  }, [selectedUser]);

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    userFormConfig.forEach(field => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    onSubmit(formData);
    setFormData(emptyUser);
  };

  return (
    <Stack spacing={2}>
      {userFormConfig.map(field => (
        <TextField
          key={field.name}
          label={field.label}
          type={field.type || "text"}
          value={formData[field.name] || ""}
          onChange={e => handleChange(field.name, e.target.value)}
          error={!!errors[field.name]}
          helperText={errors[field.name]}
          fullWidth
        />
      ))}
      <Button variant="contained" onClick={handleSubmit}>
        Save User
      </Button>
    </Stack>
  );
}
