import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomDarkTheme, CustomDefaultTheme} from './Theme';
import {Provider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Setting from './screens/Setting';
import Search from './screens/Search';
import Cart from './screens/Cart';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <View style={styles.drawerContent}>
        <Tab.Navigator
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          barStyle={{backgroundColor: '#e91e63'}}
          initialRouteName="Home">
          <Tab.Screen
            name="Home"
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
            component={Home}
          />

          <Tab.Screen
            name="Settings"
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="account-settings"
                  color={color}
                  size={26}
                />
              ),
            }}
            component={Setting}
          />

          <Tab.Screen
            name="Search"
            options={{
              tabBarLabel: 'Search',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="select-search"
                  color={color}
                  size={26}
                />
              ),
            }}
            component={Search}
          />

          <Tab.Screen
            name="Cart"
            options={{
              tabBarLabel: 'Cart',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="cart" color={color} size={26} />
              ),
            }}
            component={Cart}
          />
          <Tab.Screen
            name="Profile"
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={26}
                />
              ),
            }}
            component={Profile}
          />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const theme = darkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <Provider theme={theme}>
      <MyTabs />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
