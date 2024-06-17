import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const CheckBox = ({options = [], onChange}) => {
  const [selected, setSelected] = useState(null);

  function toggle(id, text) {
    setSelected(id);
    onChange(id, text); // Passa tanto o id quanto o texto selecionado
  }

  useEffect(() => {
    if (selected !== null) {
      onChange(selected, options.find(op => op.id === selected)?.text || '');
    }
  }, [selected]);

  return (
    <View>
      {options.map(op => (
        <TouchableOpacity
          key={op.id}
          onPress={() => toggle(op.id, op.text)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <View style={{marginRight: 10}}>
            {selected === op.id && (
              <Icon name="check-bold" color={'green'} size={16} />
            )}
          </View>
          <Text>{op.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CheckBox;
