 
 
import React from "react";
import { View, Text,Button } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
    <Text>Home</Text>
      <Button onPress ={() => {navigation.navigate('Details')}} title='go to details'/>
        </View>
  );
};

export default HomeScreen;