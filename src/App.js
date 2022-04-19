import React from 'react';
import AppNavigation from './navigation/index';
import {Provider} from 'react-redux';
import store from './screens/store/reducers/actions/index';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
