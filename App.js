import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import   DetailsScreen  from './src/screens/DetailsScreen';
import HomeScreen from './src/screens/HomeScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ExploreScreen from './src/screens/ExploreScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MainTabScreen from './src/screens/MainTabScreen';
import { DrawerContent } from './src/screens/DrawerContent';
import SettingsScreen from './src/screens/SettingsScreen';
import SplashScreen from './src/screens/SplashScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { color } from 'react-native-reanimated';
import { ActivityIndicator } from 'react-native-paper';
import { AuthContent } from './components/context';
const Drawer = createDrawerNavigator();
 
const Tab = createMaterialBottomTabNavigator();

const RootStack  = createNativeStackNavigator();

const RootStackScreen = ({navigation}) =>{
  return (
    <RootStack.Navigator    >
       <RootStack.Screen name="SplashScreen" component={SplashScreen}   options={{    headerShown: false    }} />
       <RootStack.Screen name="SignInScreen" component={SignInScreen}  options={{    headerShown: false    }} />
       <RootStack.Screen name="SignUpScreen" component={SignUpScreen}  options={{    headerShown: false    }} />

    </RootStack.Navigator>
  )
}


export default function App() {

  // const [isLoading,setIsloading] = React.useState(true)
  // const [userToken,setUserToken] = React.useState(null)
  
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken:null
  }

  const loginReducer = (prevState,action)  => {
    switch(action.type){
      case 'RetriveToken': return {
        ...prevState,
        userToken: action.token,
        isLoading: false
      }

      case 'Login': return {
        ...prevState,
        userName:action.id,
        userToken: action.token,
        isLoading: false
      }
     
      case 'Logout': return {
        ...prevState,
        userToken: action.token,
        userName: null,
        userToken: null,
        isLoading: false
      }
      case 'Register': return {
        ...prevState,
        userName:action.id,
        userToken: action.token,
        isLoading: false
      }

    }
  }

  const [loginState,setLoginState] = React.useReducer(loginReducer,initialLoginState)

  const authContent = React.useMemo(() =>({
    signIn : (username,password) => {
      // setUserToken("1111")
      // setIsloading(false)
      let userToken
      userToken= null
      if(username === 'user'  && password ==='pass')
         userToken= 'ddd'
      
      dispatch({type: 'Login',id:username,token:userToken})   
    },
    signUp: () => {
     // setUserToken("1111")
     // setIsloading(false)
    },
    signOut : () => {
     // setUserToken(null)
     // setIsloading(false)
    },

  }))
  React.useEffect(()=>{
     setTimeout(()=>{
      dispatch({type: 'RetriveToken',id:username,token:'userToken'})  
     },1000)
  },[])
  if(loginState.isLoading){
    return(
       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <ActivityIndicator size = "small" />
       </View>
    )
  }

  return (
    <AuthContent.Provider value ={authContent}>
  
    <NavigationContainer>
      { loginState.userToken !==null ? 
        <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={MainTabScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />  

        </Drawer.Navigator> 
      :
       <RootStackScreen />
}
 

    </NavigationContainer>
    </AuthContent.Provider>
  );
}

 