import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';

const ProfileImage = ({source}) => {
  const [image, setImage] = useState('');
  useEffect(() => {
    console.log(source);
    setImage(source);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 50, // Define a borda como metade do tamanho da largura/altura para criar um círculo
    overflow: 'hidden', // Garante que a imagem seja cortada para caber no círculo
  },
  image: {
    flex: 1,
    width: '100%', // A imagem preencherá o espaço do contêiner circular
    height: '100%',
    resizeMode: 'cover', // Redimensiona a imagem para preencher o contêiner
  },
});

export default ProfileImage;
