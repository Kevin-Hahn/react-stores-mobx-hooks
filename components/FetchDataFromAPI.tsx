import { observer } from 'mobx-react';
import * as React from 'react';
import { useStores } from '../hooks/useStores';

export const FetchDataFromAPI = observer(() => {
  const { userStore } = useStores();

  const handleGetUsers = () => {
    userStore.getUsers();
  };

  console.log('FetchDataFromAPI COMPONENT RENDER');
  console.log('UserStore properties and functionality', userStore);

  return (
    <React.Fragment>
      <button onClick={handleGetUsers}>Load users via API</button>

      <ul>
        {!userStore.isEmpty &&
          userStore.users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
      </ul>

      <div>User count: {userStore.userCount}</div>
    </React.Fragment>
  );
});

export default FetchDataFromAPI;
