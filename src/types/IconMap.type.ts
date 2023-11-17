
import { Entypo } from '@expo/vector-icons'; 
import { TaskType } from '@types';

export type IIconMap = {
  [key in TaskType]: keyof typeof Entypo.glyphMap
}
