import React from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';



const SignUpScreen = () => {
    return (
     <View style={styles.container} >
       <Text>Sign Up Screen</Text>
          <Button title="Go to Homepage"
                onPress={() => navigation.navigate("home")}/>  
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

  export default SignUpScreen;