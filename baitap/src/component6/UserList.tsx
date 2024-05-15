// UserList.tsx (Component con)
import React from 'react';

interface User {
  id: number;
  name: string;
  address: string;
  email: string;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      <h2>Danh sách người dùng</h2>
      {users.map(user => (
        <div key={user.id}>
          <p>Id: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Address: {user.address}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;
