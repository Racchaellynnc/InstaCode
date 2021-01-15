import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
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
  container: any;
}

const HomeScreen: React.FC<Props> = (props): JSX.Element => {
    return (
     <View style={styles.container} >
        <MapView style={{ ...StyleSheet.absoluteFillObject }}> 
        </MapView>  
        <View style={styles.addTree} >
          <View style={styles.addTreeWrapper}>
            <Icon style={styles.icon} name="add-circle-outline" color={'white'} size={55} /> 
          </View>
        </View>  
     </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    addTree: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 25
    },
    icon: {
      padding: 5,
      width: '100%',
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems:'center',
      
    },
    addTreeWrapper: {
      paddingLeft: 3,
      height: 69,
      backgroundColor: '#03B898',
      borderRadius: 57,
    }
});

export default HomeScreen;