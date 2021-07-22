import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button, Platform } from 'react-native'
import { check, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions'
import BlackBoton from '../components/BlackBoton';
import { PermissionsContext } from '../context/PermissionContext';

const PermissionsScreen = () => {

    const { permissions, askLocationPermissions } = useContext(PermissionsContext)


    return (
        <View style={styles.container} >
            <Text style={styles.title} >Es necesario  el uso del GPS  para el usar  esta aplicación </Text>

            <BlackBoton 
                title='Permiso'
                onPress={ askLocationPermissions }
            />
            <Text style={{ marginTop: 20, }} > 
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
   title: {
       width: 200,
       fontSize: 18,
       textAlign: 'center',
       marginBottom: 20,
   } 
});
