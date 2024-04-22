import React, {useEffect, useState} from 'react';
import {View, TextTitle, TouchableOpacityStyle} from './Styles.js';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const CheckBox = ({options = [], onChange}, multiple = false) => {
  const [selected, setSelected] = useState([]);
  function toggle(id) {
    let index = selected.findIndex(i => i === id); /*  */

    let arrSelecteds = [...selected];
    if (index !== -1) {
      arrSelecteds.splice(index, 1);
    } else {
      multiple ? arrSelecteds.push(id) : (arrSelecteds = [id]);
    }
    setSelected(arrSelecteds);
  }

  useEffect(() => onChange(selected), [selected]);

  return (
    <View>
      {options.map((op, index) => (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacityStyle
            backgroundColor={
              selected.findIndex(i => i === op.id) !== -1 ? '#3EBD93' : '#fff'
            }
            onPress={() => toggle(op?.id)}>
            {selected.findIndex(i => i === op.id) !== -1 ? (
              <Icon name="check-bold" color={'#red'} size={16} />
            ) : null}
          </TouchableOpacityStyle>
          <TextTitle>{op?.text}</TextTitle>
        </View>
      ))}
    </View>
  );
};

export default CheckBox;
