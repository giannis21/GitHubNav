import React from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    TextInput
} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as  Animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { color } from "react-native-reanimated";
const SignUpScreen = ({navigation}) => {
   const [data,setData] = React.useState({email:'',password:'',confirm_password:'',check_textInputChange:false,secureTextEntry:true,confirm_secureTextEntry:true})
   const textInputChange= (value) =>{
       if(value.length>0){
           setData({
               ...data,
               email:value,
               check_textInputChange:true
           })
       }else{
        setData({
            ...data,
            email:value,
            check_textInputChange:false
        })
       }
   }

   const handlePasswordChange = (val) => {
    if( val.trim().length >= 8 ) {
        setData({
            ...data,
            confirm_password: val,
            isValidPassword: true
        });
    } else {
        setData({
            ...data,
            confirm_password: val,
            isValidPassword: false
        });
    }
}

const handleConfirmPasswordChange = (val) => {
    if( val.trim().length >= 8 ) {
        setData({
            ...data,
            password: val,
            isValidPassword: true
        });
    } else {
        setData({
            ...data,
            password: val,
            isValidPassword: false
        });
    }
}


const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
}
const updateConfirmSecureTextEntry = () => {
    setData({
        ...data,
        confirm_secureTextEntry: !data.confirm_secureTextEntry
    });
}
    return (
      <View style={styles.container}>
           <StatusBar backgroundColor='#009387' barStyle='light-content' />
          <View style={styles.header}>
             <Text style={styles.text_header}>Register now</Text>
           </View>

    <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action} >
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput placeholder="Your email" style={styles.textInput} onChangeText={(value) =>{textInputChange(value)}}/>
            {data.check_textInputChange ? <Animatable.View animation='bounceIn'>
                <Feather name="check-circle" size={20}  size={20} color='grey'/> 
             </Animatable.View>
            : null } 
        </View>
        <Text style={[styles.text_footer,{marginTop:18}]}>password</Text>
        <View style={styles.action} >
            <FontAwesome name="lock" color="#05375a" size={20} />
            <TextInput placeholder="Your password" style={styles.textInput} secureTextEntry={data.secureTextEntry ? true :false}  onChangeText={(value) =>{handlePasswordChange(value)}}/>
            
            <TouchableOpacity onPress={updateSecureTextEntry}>
                <Animatable.View animation='bounceIn'>
                {data.secureTextEntry ? <Feather name="eye-off" size={20} color='grey'/> :<Feather name="eye" size={20} color='grey'/>
                  
                }
                  </Animatable.View>
            </TouchableOpacity>


        </View>
        <Text style={[styles.text_footer,{marginTop:18}]}>Confirm password</Text>
        <View style={styles.action} >
            <FontAwesome name="lock" color="#05375a" size={20} />
            <TextInput placeholder="Confirm password" style={styles.textInput} secureTextEntry={data.confirm_secureTextEntry ? true :false}  onChangeText={(value) =>{handleConfirmPasswordChange(value)}}/>
            
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                <Animatable.View animation='bounceIn'>
                {data.confirm_secureTextEntry ? <Feather name="eye-off" size={20} color='grey'/> :<Feather name="eye" size={20} color='grey'/>
                  
                }
                  </Animatable.View>
            </TouchableOpacity>


        </View>

        <View style={styles.button}>
            <LinearGradient  colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
                <Text style={[styles.textSign,{color:'#fff'}]}>Sign Up</Text>
            </LinearGradient>

            <TouchableOpacity style={[styles.signIn, {borderColor: '#009387', borderWidth: 1,marginTop: 15}]} onPress={() =>{navigation.goBack()}}>
                <Text >Sign In</Text>
            </TouchableOpacity>
        </View>
       
        </Animatable.View>
 
      </View>
  
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -3,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
export default SignUpScreen;