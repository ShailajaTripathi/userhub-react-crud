import { useEffect, useState } from "react";
import { Container, Typography, Stack } from "@mui/material";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import type { User } from "./types/user";

import './App.css';
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} from "./services/userApi";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const loadUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async (user: User) => {
    if (user.id) {
      await updateUser(user.id, user);
    } else {
      await createUser(user);
    }
    setSelectedUser(null);
    loadUsers();
  };

  const handleEdit = (user: User) => {
    setSelectedUser(user);
  };

  const handleDelete = async (id: number) => {
    await deleteUser(id);
    loadUsers();
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        UserHub – React CRUD App
      </Typography>

      <Stack spacing={4}>
        <UserForm
          key={selectedUser?.id ?? "new"}
          selectedUser={selectedUser}
          onSubmit={handleSubmit}
        />

        <UserList
          users={users}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Stack>
    </Container>
  );
}

export default App;
