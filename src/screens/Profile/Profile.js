import React, {useEffect, useState} from 'react';
import {View} from './Styles.js'; // Aliased TextInput import
import styled from 'styled-components/native';
import ProfileImage from '../../components/profilePicture';
import axios from 'axios';
import {
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FavoriteSpaceItem from '../../components/favoriteSpaceItem.js';
export default function Feed({route}) {
  const {name, email, photo, roles} = route.params;

  const [userName, setUserName] = useState(name);
  const [favoriteSpaces, setFavoriteSpaces] = useState([]);
  useEffect(() => {
    axios
      .get(`https://gestao-de-espaco-api.onrender.com/user/find-user/${email}`)
      .then(function (response) {
        console.log(response.data.favorite_spaces);
        setFavoriteSpaces(response.data.favorite_spaces);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  //console.log(userlogin);
  console.log(roles);
  return (
    <View>
      <Text> </Text>
      <Text style={styles.title}> Profile </Text>
      <View style={styles.boxTitle}>
        <ProfileImage source={photo} />
        <Text style={styles.message}>Olá {`${userName}`}</Text>
      </View>
      {favoriteSpaces.map(favoriteSpace => (
        <FavoriteSpaceItem
          key={favoriteSpace.id}
          space={{
            name: favoriteSpace.name,
            location: favoriteSpace.pavilion,
            id: favoriteSpace.id,
          }}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  boxTitle: {
    display: 'flex',
    flexDirection: 'row', // Define a direção dos itens para serem dispostos em linha
    alignItems: 'center', // Alinha os itens verticalmente ao centro
    marginLeft: 20,
    marginBottom: 40,
  },
  message: {
    marginLeft: 40,
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginLeft: 10,
    marginBottom: 10,
    width: 200,
    height: 100,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  spaceLocation: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
