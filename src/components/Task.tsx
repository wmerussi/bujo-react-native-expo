import { StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { ITask } from '@interfaces';
import { IIconMap } from '@types';
import { Text } from './Text';

const iconMap: IIconMap = {
  'new': 'dot-single',
  'done': 'cross',
  'next-day': 'chevron-right',
  'next-month': 'chevron-left',
  'event': 'plus',
  'note': 'minus'
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    paddingLeft: 4,
  }
});

export function Task(props: ITask) {
  const {name, type} = props;
  const icon: keyof typeof Entypo.glyphMap = iconMap[type];

  return (
    <View style={styles.container}>
      <Entypo name={icon} size={24} color="black" />
      <Text style={styles.text}>{ name }</Text>
    </View>
  );
}
