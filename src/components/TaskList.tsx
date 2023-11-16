import { View } from "react-native";
import { ITask } from '@interfaces';
import { Task } from "./Task";

interface Props {
  tasks: ITask[];
}

export function TaskList(props: Props) {
  const { tasks } = props;

  return (
    <View>
      { tasks.map(task => <Task key={task.id} name={task.name} />) }
    </View>
  );
}
