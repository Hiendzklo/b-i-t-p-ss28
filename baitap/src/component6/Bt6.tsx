// App.tsx (Component cha)
import React from 'react';
import UserList from './UserList';

interface User {
  id: number;
  name: string;
  address: string;
  email: string;
}

const App: React.FC = () => {
  // Khai báo một mảng các user
  const users: User[] = [
    {
      id: 1,
      name: 'John',
      address: 'Hà Nội',
      email: 'john@gmail.com'
    },
    {
      id: 2,
      name: 'Linda',
      address: 'Hà Nam',
      email: 'linda@gmail.com'
    }
  ];

  return (
    <div className="App">
      <UserList users={users} />
    </div>
  );
}

export default App;
