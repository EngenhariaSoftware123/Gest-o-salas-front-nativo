import React, {useState} from 'react';
import {
  StatusBar,
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ProfileImage from '../../components/profilePicture';

export default function Home({route}) {
  const {name, email, photo, roles} = route.params;
  const navigation = useNavigation();

  const solicitarManutencao = () => {
    navigation.navigate('Maintenance', {email: email});
    console.log('Solicitando manutenção...');
  };
  const solicitarCadastroProfessor = () => {
    navigation.navigate('RegistrationTeacher');
    console.log('Solicitando cadastro do professor...');
  };

  const vincularGestorEspaço = () => {
    navigation.navigate('LinkManagersSpace');
    console.log('Solicitando cadastro do Gestor ao espaço');
  };

  const RegistarSetor = () => {
    navigation.navigate('RegistrationSector');
    console.log('Solicitando cadastro de setor');
  };

  const verPerfil = () => {
    navigation.navigate('Profile', {
      email: email,
      roles: roles,
      photo: photo,
      name: name,
    });
    console.log('Solicitando cadastro de setor');
  };
  const CadastrarEspaco = () => {
    navigation.navigate('Space');
    console.log('Solicantando cadastro de espaço');
  };

  const [userName, setUserName] = useState(name);
  //console.log(userlogin);
  console.log(roles);
  return (
    <ScrollView>
      <View style={styles.container}>
        <ProfileImage source={photo} />
        <Text> </Text>
        <Text> </Text>
        <Text>{`${roles}`} </Text>
        <Text style={styles.title}>Bem Vindo {`${userName}`}</Text>
        <Text style={styles.container}>{`${userName}`}</Text>

        <TouchableOpacity style={styles.button} onPress={verPerfil}>
          <Text style={styles.buttonText}>Meu perfil</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={solicitarCadastroProfessor}>
          <Text style={styles.buttonText}>Cadastrar Professor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={solicitarManutencao}>
          <Text style={styles.buttonText}>Solicitar Manutenção</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={vincularGestorEspaço}>
          <Text style={styles.buttonText}>Vincular Gestor ao Espaço</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={RegistarSetor}>
          <Text style={styles.buttonText}>Cadastrar setor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={CadastrarEspaco}>
          <Text style={styles.buttonText}>Cadastrar Espaço</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 22,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 50,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});