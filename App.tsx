import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import { PermissionsProvider } from './src/context/PermissionContext';

const AppsState = ({children}: any ) => {
  return(
    <PermissionsProvider>
      { children }
    </PermissionsProvider>
  );
} 

const App = () => {
  return (
    <NavigationContainer>
      <AppsState>
        <StackNavigation />
      </AppsState>
    </NavigationContainer>
  )
}

export default App;
