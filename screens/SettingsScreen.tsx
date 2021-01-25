import React from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';

interface Props {
  val: string;
  iconStyles: any;
  textHeader?: StyleProp<TextStyle>;
  textFooter?: StyleProp<TextStyle>;
  action?: StyleProp<ViewStyle>;
  footer?: StyleProp<ViewStyle>;
  container?: StyleProp<ViewStyle>;
  header?: StyleProp<TextStyle>;
  textInput?: StyleProp<TextStyle>;
}
  const SettingsScreen: React.FC<Props> = (props, navigation): JSX.Element =>{
    return (
     <View style={styles.container} >
       <Text>Setting Screen</Text>
          
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

export default SettingsScreen;