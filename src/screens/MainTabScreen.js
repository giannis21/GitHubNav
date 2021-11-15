
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import   DetailsScreen  from './DetailsScreen';
import HomeScreen from './HomeScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';

 
const HomeStack = createNativeStackNavigator();
const DetailsStack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeStackScreen = ({navigation}) =>{
    return(
       <HomeStack.Navigator >
       <HomeStack.Screen options={{headerShown :false}} name="Home" component={HomeScreen} />
       
       </HomeStack.Navigator>
    )
   
  }
  
  const DetailsStackScreen = ({navigation}) =>{
    return(
      <DetailsStack.Navigator>
         <DetailsStack.Screen options={{headerShown :false}} name="Details" component={DetailsScreen} />
       </DetailsStack.Navigator>
    )
   
  }

  const MainTabScreen = () => {
    return (
      <Tab.Navigator
        
        initialRouteName="Feed"
        activeColor="#fff"
        barStyle={{ backgroundColor: 'blue' }}
      >
        <Tab.Screen
          name="Home1"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Details"
          component={DetailsStackScreen}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
   
  export default MainTabScreen