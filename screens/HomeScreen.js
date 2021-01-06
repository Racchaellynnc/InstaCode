import React from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';


const HomeScreen = ({navigation}) => {
    return (
     <View style={styles.container} >
       <Text>HomeScreen</Text> 
          <Button title="Your Profile Page"
                onPress={() => navigation.navigate("profile")}/>      
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

export default HomeScreen;