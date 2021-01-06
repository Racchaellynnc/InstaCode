import React from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';


const ProfileScreen = ({navigation}) => {
    return (
     <View style={styles.container} >
       <Text>HomeScreen</Text>
          <Button title="Go to Profile"
                onPress={() => navigation.push("profile")}/>
          <Button title="Go to Homepage"
                onPress={() => navigation.navigate("home")}/>
          <Button title="Go back"
                onPress={() => navigation.goBack()}/>
           <Button title="Go to first screen"
                onPress={() => navigation.popToTop()}/>     
     </View>
    );
  };

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
      },
  });

  export default ProfileScreen;