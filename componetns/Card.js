import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'

export default function Card(props) {
    
    return (
        <View style={styles.cardContainer}>
                {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        width: '100%',
        borderWidth: 1,
        marginTop: 10,
        borderColor: 'white',
        padding: 10,
        borderRadius: 10,

    }
})