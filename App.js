import React from 'react';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from './src/core/theme';
import Stacks from './src/navigation/stacks';
import Tabs from './src/navigation/tabs';

function App () {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stacks />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
