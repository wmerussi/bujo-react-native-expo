import { Text } from './Text';

interface Props {
  name: string;
}

export function Task(props: Props) {
  const { name } = props;

  return (
    <Text>{ name }</Text>
  );
}
