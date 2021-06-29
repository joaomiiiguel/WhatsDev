import * as React from 'react';
import { useWindowDimensions, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import HomeScreen from './src/screens/Home/Home'
import CallsScreen from './src/screens/Calls/Calls'
import ContactScreen from './src/screens/Contact/Contact'
import { theme } from './src/styles/globalcss';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const renderScene = SceneMap({
  home: HomeScreen,
  call: CallsScreen,
  contact: ContactScreen,
});

export default function App() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'home', icon: 'chatbubbles' },
    { key: 'call', icon: 'call' },
    { key: 'contact', icon: 'people' },
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: theme.colors.secundary }}
      style={{ backgroundColor: theme.colors.branco }}
      renderIcon={({ route }) => (
        <Icon
          name={route.icon}
          color={theme.colors.primary}
          size={30}
        />
      )}
    />
  );

  return (
    <NavigationContainer>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        tabBarPosition="bottom"
        initialLayout={{ width: layout.width  }}
      />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#263238',
    overflow: 'hidden',
  },
  icon: {
    backgroundColor: 'transparent',
    color: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    backgroundColor: 'rgb(0, 132, 255)',
    width: 48,
    height: 48,
    borderRadius: 24,
    margin: 6,
  },
})