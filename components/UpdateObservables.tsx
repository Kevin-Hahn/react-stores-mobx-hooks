import { observer } from 'mobx-react';
import * as React from 'react';
import { useStores } from '../hooks/useStores';

export const UpdateObservables = observer(() => {
  const { storeA } = useStores();

  const handleClick = () => {
    // update the store value from a component (e.g. input)
    storeA.setSomePropertyText('NEW VALUE');
  };

  console.log('UpdateObservables COMPONENT RENDER');
  console.log('Store A properties and functionality', storeA);

  return (
    <React.Fragment>
      <div>A value from StoreA: {storeA.someProperty || 'not yet set'}</div>
      <button onClick={handleClick}>Set value</button>
    </React.Fragment>
  );
});

export default UpdateObservables;
