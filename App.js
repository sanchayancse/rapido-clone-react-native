import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/routes/AppNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
