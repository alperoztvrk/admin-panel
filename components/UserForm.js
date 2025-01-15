import { useState } from 'react';

const UserForm = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');

  const addUser = () => {
    setUsers([...users, { id: Date.now(), name }]);
    setName('');
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h2>User CRUD</h2>
      <input
        type="text"
        placeholder="Enter user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserForm;
