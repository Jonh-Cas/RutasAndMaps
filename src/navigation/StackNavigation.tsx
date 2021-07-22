import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../pages/MapScreen';
import PermissionsScreen from '../pages/PermissionsScreen';
import { PermissionsContext } from '../context/PermissionContext';
import LoadingScreen from '../pages/LoadingScreen';


const Stack = createStackNavigator();

const StackNavigation = () => {

    const { permissions } = useContext(PermissionsContext);

    if( permissions.locationStatus === 'unavailable' ){
        return (<LoadingScreen />)
    }

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white',
                }
            }}
        >
            {
                (permissions.locationStatus === 'granted')
                 ? <Stack.Screen name='MapScreen' component={ MapScreen } />
                 : <Stack.Screen name='PermissionsScreen' component={ PermissionsScreen } />
                
            }
          
        </Stack.Navigator>
    )
}

export default StackNavigation;
