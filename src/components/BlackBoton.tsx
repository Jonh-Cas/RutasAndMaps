import React from 'react'
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'

interface Props {
    title: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>
}

const BlackBoton = ({ title, onPress, style }: Props) => {
    
    
    return (
      <TouchableOpacity
        onPress={ onPress }
        activeOpacity={ 0.9}
        style={{
            ...style as any,
            ...styles.blackBoton,
        }}
      >
          <Text style={styles.buttonText} > { title } </Text>
      </TouchableOpacity>
    )
}

export default BlackBoton;

const styles = StyleSheet.create({
    blackBoton: {
        height: 50, 
        width: 200,
        backgroundColor: 'black',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        elevation: 6,
        
    },

    buttonText: {
        color: 'white',
        fontSize: 18,

    }
})
