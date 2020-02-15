import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import reducer from './src/reducers/navigations'
import {Provider} from 'react-redux';
import {createStore} from 'redux';

let store = createStore(reducer);

const Final = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => Final);
