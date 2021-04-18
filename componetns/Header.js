import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function Header(){
    return (
        <View style={styles.appTitile}>
            <Text style={styles.title}>News</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    appTitile: {
        // marginTop: 40,
        flex:1,
        backgroundColor: '#de719f',
        width: '100%',
        alignItems: 'center',
        // justifyContent:'center',
        padding: 20
    },
})