import React, { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

const FindUser: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };
  return (
    <div>
      <h2>User Search</h2>
      <input value={name} onChange={onChange} />
      <button onClick={onClick}>Find User</button>
      <div>
        <h2>{user && user.name}</h2>
        <h2>{user && user.age}</h2>
      </div>
    </div>
  );
};

export default FindUser;
