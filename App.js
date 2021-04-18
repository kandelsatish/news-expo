// import React, { useState, useEffect } from 'react';
import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Card from './componetns/Card'
import NewsDetails from './componetns/NewsDetails'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeComponent from './componetns/HomeComponent';
import Header from './componetns/Header'
export default function App() {




  const HomeStack = createStackNavigator();
  const HomeStackScreen = () => (
    <HomeStack.Navigator initialRouteName={HomeComponent}>
      <HomeStack.Screen name="HomeComponent" component={HomeComponent} options={{
        title: 'News',
        headerStyle: {
          backgroundColor: '#de719f',
          // flex: 1,
          // alignItems: "center",
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 30,
          alignSelf: 'center'
        }
      }} />
      <HomeStack.Screen name="NewsDetails" component={NewsDetails} options={{
        title: 'News',
        headerStyle: {
          backgroundColor: '#de719f',
         
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 30,
          alignSelf: 'center'
        }
      }} />
    </HomeStack.Navigator>
  )

  return (
    <NavigationContainer>
      <HomeStackScreen />
    </NavigationContainer>
  );
}

