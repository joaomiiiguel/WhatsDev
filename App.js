import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/screens/Home/Home'
import DetailsScreen from './src/screens/Details/Details'
import ContactScreen from './src/screens/Contact/Contact'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>

      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          showLabel: false,
          style:{
            position: 'absolute',
            bottom: 15,
            left: 20,
            right:20,
            elevation: 0,
            backgroundColor:'#F7F7F7',
            borderRadius: 25,
            height: 60
          },
          activeTintColor: '#075F56'
        }}
        screenOptions={{
          headerShown: false
        }}>

        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color }) => (
              <Icon name="chatbubble" color={color} size={30} />
            ),
          }} />
        <Tab.Screen
          name="Call"
          component={DetailsScreen}
          options={{
            tabBarLabel: 'Call',
            tabBarIcon: ({ color }) => (
              <Icon name="call" color={color} size={30} />
            ),
          }} />
        <Tab.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            tabBarLabel: 'Contact',
            tabBarIcon: ({ color }) => (
              <Icon name="people" color={color} size={30} />
            ),
          }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}