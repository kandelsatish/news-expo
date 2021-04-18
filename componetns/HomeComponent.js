import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity,  Image, Share  } from 'react-native';
import Card from '../componetns/Card'
export default HomeComponent = ({ navigation }) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2e76a132bf284df19134f51ef029b059')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setNews(data.articles)
            });

    }, []);

    const handleShare= async (item)=>{
        try {
            Share.share({
                message:item.url
                
            })
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <View style={styles.container}>
            {/* <View style={styles.appTitile}>
                <Text style={styles.title}>News</Text>
            </View> */}
            <View style={styles.newsfeed}>
                <Text style={styles.headlines}>Headlines</Text>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={news}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('NewsDetails', { item })}>
                            <Card>
                                <Image style={{ width: '100%', height: 100, resizeMode: 'cover', justifyContent: "center" }} source={{ uri: item.urlToImage }} />
                                <Text style={styles.newsTitle}>{item.title}</Text>
                                <Text style={styles.newsDescreption} numberOfLines={2}>{item.description}</Text>
                                <TouchableOpacity style={{position:"absolute",alignSelf:'flex-end'}} onPress={()=>handleShare(item)}>
                                    <Text style={{color:'white',fontSize:18,fontWeight:'bold',marginEnd:10,padding:15}}>share</Text>
                                </TouchableOpacity>
                            </Card>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent:"center"
    },
    appTitile: {
        // marginTop: 40,
        backgroundColor: '#de719f',
        width: '100%',
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    newsfeed: {
        flex: 1,
        backgroundColor: '#f765a2',
        padding: 10
    },
    headlines: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    newsTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    image: {
        justifyContent: "center"
    }, newsDescreption: {
        color: 'white'
    }
});