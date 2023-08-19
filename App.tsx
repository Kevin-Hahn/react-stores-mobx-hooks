import * as React from 'react';
import { FetchDataFromAPI } from './components/FetchDataFromAPI';
import UpdateObservables from './components/UpdateObservables';
import './style.css';

export const App = () => {
  return (
    <React.Fragment>
      <h3>Update observables</h3>
      <UpdateObservables />
      <hr />
      <h3>API call + save in store</h3>
      <FetchDataFromAPI />
    </React.Fragment>
  );
};

export default App;
