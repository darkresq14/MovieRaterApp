import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MovieList from './components/list';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Detail from './components/detail';
import Edit from './components/edit';
import Auth from './components/auth';

const AppNavigator = createStackNavigator({
  Auth: {screen: Auth},
  MovieList: {screen: MovieList, navigationOptions: ({navigation}) => ({
    headerShown: true,
    title: "List of Movies",
    headerStyle: {
      backgroundColor: 'orange',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 24,
    }
  })},
  Detail: {screen: Detail, navigationOptions: ({navigation}) => ({
    title: navigation.getParam('title'),
    headerStyle: {
      backgroundColor: 'orange',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 24,
    }
  })},
  Edit: {screen: Edit, navigationOptions: ({navigation}) => ({
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 24,
    }
  })},
},
  {headerMode: 'screen'},
)

const styles = StyleSheet.create({
  headerButton: {
    paddingRight: 5,
  }
})

const App = createAppContainer(AppNavigator);

export default App;
