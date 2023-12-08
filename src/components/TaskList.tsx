import { StyleSheet, View } from "react-native";
import { ITask } from '@interfaces';
import { Task } from "./Task";

interface Props {
  tasks: ITask[];
  style?: object;
}

export function TaskList(props: Props) {
  const { style, tasks } = props;

  return (
    <View style={style}>
      { tasks.map(task => <Task style={styles.task} key={task.id} {...task} />) }
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    marginBottom: 4,
  },
});
