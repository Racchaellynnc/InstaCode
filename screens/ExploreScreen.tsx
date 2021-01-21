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

const ExploreScreen: React.FC<Props> = (props, navigation): JSX.Element => {
    return (
      <View style={{ ...StyleSheet.absoluteFillObject }} >
      <MapView 
        style={styles.map}
        region={{
          latitude: 37.225408,
          longitude:-121.799551,
          latitudeDelta: .008,
          longitudeDelta: .8
        }} 
      > 
      <Marker
        coordinate={{ latitude: 37.225408, longitude: -121.799551, }}
        image={require('../assets/marker.svg')}
        title='test title'
        description="test"
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
  map: {
    height: '100%'
  },
  bubble: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 100,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: 120,
    height: 80,
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
    
  }
});
  export default ExploreScreen;