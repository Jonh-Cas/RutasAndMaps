import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button, Platform } from 'react-native'
import { check, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions'
import { PermissionsContext } from '../context/PermissionContext';

const PermissionsScreen = () => {

    const { permissions, askLocationPermissions } = useContext(PermissionsContext)


    return (
        <View style={styles.container} >
            <Text>Permissions Screen</Text>
            <Button 
             title='Permiso'
             onPress={ askLocationPermissions }
            />
            <Text> 
                {JSON.stringify(permissions, null, 5) }    
            </Text>

        </View>
    )
}

export default PermissionsScreen;

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

   }, 
});
