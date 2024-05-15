import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  address: string;
}

const Exercise03: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Nguyễn Minh Sơn', address: 'Hà Nội' },
    { id: 2, name: 'Trần Thị Lan', address: 'Đà Nẵng' },
    { id: 3, name: 'Phạm Văn Đức', address: 'Hồ Chí Minh' }
  ]);

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>Họ và Tên: {user.name}</p>
            <p>Địa chỉ: {user.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Exercise03;
