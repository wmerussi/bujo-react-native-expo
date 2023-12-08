import { StyleSheet } from "react-native";
import { Text } from "./Text";

interface Props {
  children: React.ReactNode;
}

export function Title(props: Props) {
  const {children} = props;
  return <Text style={styles.title} size='large' weight='bold'>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    padding: 16,
    backgroundColor: '#eee',
  }
});
