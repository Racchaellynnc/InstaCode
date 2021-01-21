import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, {Marker} from 'react-native-maps';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';

const HomeScreen: React.FC<Props> = (props): JSX.Element => {
    return (
     <View style={styles.container} >
        <MapView style={{ ...StyleSheet.absoluteFillObject }}
        initialRegion={{
          latitude: 37.225408,
          longitude:-121.799551,
          latitudeDelta: .008,
          longitudeDelta: .8
       }} 
        > 
        <Marker
          coordinate={{ latitude: 37.225408, longitude: -121.799551 }}
          title='Yay I did it!'
          description='My first marker'
        >
   </Marker >
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
      flex: 1,
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