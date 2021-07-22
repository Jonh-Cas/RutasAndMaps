import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
import { AppState, Platform } from 'react-native';
import { PermissionStatus, request, PERMISSIONS, check, openSettings } from 'react-native-permissions';


interface PermissionState {
    locationStatus: PermissionStatus;

}


export const permissionsInitState: PermissionState = {
    locationStatus: 'unavailable',
} 

type PermissionsContextProps = {
        permissions: PermissionState;
        askLocationPermissions: () => void
        checkLocationPermissions: () => void
        
    }

export const PermissionsContext = createContext({} as PermissionsContextProps ) //TODO: que exporta

export const PermissionsProvider = ({children}: any  ) => {

    const [permissions, setPermissions] = useState(permissionsInitState);

    useEffect(() => {
        AppState.addEventListener('change', state => {
            
            if(state !== 'active') return;

            checkLocationPermissions();

        } )
    }, [])


    const askLocationPermissions = async () => {
        let permissionStatus: PermissionStatus;

        if(Platform.OS === 'ios'){
            // permissionStatus = await check( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
            permissionStatus = await request( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        }else{
            // permissionStatus = await check( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            permissionStatus = await request( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }

        if(permissionStatus === 'blocked'){
            openSettings();
        }

        console.log(permissionStatus);
        setPermissions({
            ...permissions,
            locationStatus: permissionStatus,
        });
    }
    const checkLocationPermissions = async () => {
        let permissionStatus: PermissionStatus;

        if(Platform.OS === 'ios'){
            // permissionStatus = await check( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
            permissionStatus = await check( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        }else{
            // permissionStatus = await check( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            permissionStatus = await check( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }

        setPermissions({
            ...permissions,
            locationStatus: permissionStatus,
        });
    }

    return(
        <PermissionsContext.Provider 
            value={{
                permissions,
                askLocationPermissions,
                checkLocationPermissions
            }}
        >
            { children }
        </PermissionsContext.Provider >
    );
}