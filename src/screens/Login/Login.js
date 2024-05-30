import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import axios from 'axios';

const Login = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [userLogged, setUserLogged] = useState({});
  const [roles, setRoles] = useState([]);
  const navigation = useNavigation();

  async function onGoogleButtonPress() {
    try {
      GoogleSignin.configure({
        webClientId:
          '733536154755-dj5g13i4jke8psktsk7a5eh09d4cn10m.apps.googleusercontent.com',
        androidClientId:
          '733536154755-dj5g13i4jke8psktsk7a5eh09d4cn10m.apps.googleusercontent.com',
      });
      await GoogleSignin.signOut();
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {idToken, user} = await GoogleSignin.signIn();
      if (!user.email.endsWith('@uesb.edu.br')) {
        setError('Apenas email-s da uesb são permitido.');
        Alert.alert(
          'Erro',
          'Apenas endereços de e-mail da UESB são permitidos.',
          [{text: 'OK', onPress: () => {}}],
          {cancelable: false},
        );
        return;
      }
      const response = await axios.post(
        'https://gestao-de-espaco-api.onrender.com/user/auth-user',
        {
          email: user.email,
        },
      );
      setRoles(response.data);
      navigation.navigate('MainApp', {
        screen: 'Tabs',
        params: {
          screen: 'Home',
          params: {
            email: user.email,
            name: user.givenName,
            photo: user.photo,
            roles: response.data.roles,
          },
        },
      });
      setUserLogged(user);
      const googleCredential = await auth.GoogleAuthProvider.credential(
        idToken,
      );
      return await auth().signInWithCredential(googleCredential);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/bg.png')}
        style={styles.imgBG}
        resizeMode="cover">
        <Image
          source={require('../../assets/uesb-logo.png')}
          style={styles.imgLogo}
        />
        <View style={styles.boxTitle}>
          <Text style={styles.title}>UESB</Text>
        </View>
        <TouchableOpacity
          onPress={async () => {
            await onGoogleButtonPress();
          }}
          disabled={loading}>
          <Image
            source={require('../../assets/img-login-google.png')}
            style={styles.imgLogin}
          />
        </TouchableOpacity>
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBG: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  boxTitle: {
    marginBottom: 350,
  },
  title: {
    fontSize: 65,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#B3074F',
  },
  imgLogin: {
    width: 250,
    height: 110,
    resizeMode: 'contain',
    marginTop: -250,
  },
  imgLogo: {
    width: 220,
    height: 210,
    resizeMode: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Login;
