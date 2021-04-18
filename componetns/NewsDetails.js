import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity,Linking } from 'react-native'
import Card from './Card'
export default function NewsDetails({ route, navigation }) {
   const { item } = route.params
   return (
      <View style={styles.container} >
         <Card>
            <Image style={{ width: '100%', height: 100, resizeMode: 'cover', justifyContent: "center" }} source={{ uri: item.urlToImage }} />
            <Text style={{ marginTop: 20 }}>{item.author}</Text>
            <Text style={styles.newsHeading}>{item.title}</Text>
            <Text style={styles.newsDescreption} numberOfLines={8}>{item.description}</Text>
            <TouchableOpacity style={{
               margin: 30, alignSelf: 'center', backgroundColor: 'white',
               padding: 8, borderRadius: 10
            }} onPress={()=>Linking.openURL(item.url)}>
               <Text>Explore</Text>
            </TouchableOpacity>
         </Card>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#f765a2',
      padding: 30,
   },
   newsHeading: {
      fontWeight: 'bold',
      fontSize: 15,
      marginTop: 20
   },
   newsDescreption: {
      marginTop: 20,
      fontSize: 15
   }

})