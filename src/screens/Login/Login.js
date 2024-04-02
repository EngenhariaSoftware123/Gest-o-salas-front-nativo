import React, {useEffect, useState} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ANDROID_CLIENT_ID, WEB_CLIENT_ID} from 'react-native-dotenv';

const GoogleLogin = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    return await GoogleSignin.signIn();
  } catch (error) {
    console.error('Erro ao fazer login com o Google:', error);
    return null;
  }
};

const Login = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const configureGoogleSignIn = async () => {
      await GoogleSignin.configure({
        androidClientId: `${ANDROID_CLIENT_ID}`,
        webClientId: `${WEB_CLIENT_ID}`,
        scopes: ['profile', 'email'],
      });
    };

    configureGoogleSignIn();
  }, []);

  const handleGoogleLogin = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await GoogleLogin();
      if (response) {
        const {idToken, user} = response;
        // Assuming you have a function to validate the token
        const resp = await authAPI.validateToken({
          token: idToken,
          email: user.email,
        });
        await handlePostLoginData(resp.data); // Handle post login logic
        navigation.navigate('Home'); // Navigate to Home screen after successful login
      } else {
        setError('Google sign-in failed');
      }
    } catch (error) {
      setError(error?.response?.data?.error?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

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
        <TouchableOpacity onPress={handleGoogleLogin} disabled={loading}>
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
