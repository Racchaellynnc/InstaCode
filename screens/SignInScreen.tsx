import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../components/context';
import {
  View,
  Text,
  Button,
  ViewStyle,
  TextStyle,
  StyleSheet,
  TextInput,
  StyleProp,
  Platform,
  TouchableOpacity,
  StatusBar
} from 'react-native';

interface Props {
    val: string;
    navigation: any;
    iconStyles: any;
    textHeader?: StyleProp<TextStyle>;
    textFooter?: StyleProp<TextStyle>;
    action?: StyleProp<ViewStyle>;
    footer?: StyleProp<ViewStyle>;
    container?: StyleProp<ViewStyle>;
    header?: StyleProp<TextStyle>;
    textInput?: StyleProp<TextStyle>;
  }

Icon.loadFont();

const SignInScreen: React.FC<Props> = (props):  JSX.Element => {
    const navigation = useNavigation(); 
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val: string) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const unSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        })
    }

    const loginHandle = (username, password) => {
        signIn(username, password);
    }

    return (   
     <View style={styles.container} >
        <LinearGradient
            colors={['#3DCC8E', '#00C68E', '#03B898']}
            style={{flex: 1}}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        >
        <StatusBar backgroundColor='#4a4a4a' barStyle='light-content' />
        <View style={styles.header} >
            <Text style={styles.textHeader} > Save the world <Icon name="earth-outline" size={30} /></Text>
        </View>
        <View style={[styles.footer, props.footer]} >
            <Text style={styles.textFooter} >Email</Text>
            <View style={styles.action}>
                <Icon
                    name="mail-outline"
                    size={25}
                    color= '#4a4a4a'
                />
                <TextInput
                    placeholder="Your Email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                { data.check_textInputChange ? 
                <Icon   
                    name="checkmark-circle-outline"
                    color="#4a4a4a"
                    size={25}
                />
                : null }
            </View>
            <Text style={[styles.textFooter, {marginTop: 35}]} > Password </Text>
            <View style={styles.action}>
                <Icon
                    name="lock-closed-outline"
                    size={25}
                    color= '#4a4a4a'
                />
                <TextInput
                    placeholder="Your Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity 
                    onPress={unSecureTextEntry} 
                >
                <Icon
                    name="eye-off-outline"
                    color="#4a4a4a"
                    size={25}
                />
                </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity 
                        style={styles.signIn}
                        onPress={() => {loginHandle( data.username, data.password )}}
                    >
                    <LinearGradient
                    colors={['#3DCC8E', '#00C68E']}
                    style={[styles.signIn, {
                        borderColor: 'white',
                        borderWidth: 1,
                        marginTop: 15,
                    }]}
                    >
                    <Text style={styles.textSign}>Sign In</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                            onPress={() => navigation.navigate('SignUpScreen')}
                            style={[styles.signIn, {
                            borderColor: '#03b898',
                            backgroundColor: 'white',
                            borderWidth: 1,
                            marginTop: 15,
                        }]}
                    >
                        <Text style={[styles.textSign, {color: '#03b898'}]}> Sign Up </Text>
                    </TouchableOpacity>
                 </View>
            </View>
        </LinearGradient>
     </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#c5f9f4'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    textHeader: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 33
    },
    textFooter: {
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
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: 'white',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '500',
    },
  });

  export default SignInScreen;