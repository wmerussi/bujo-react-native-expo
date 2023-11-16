import { StyleSheet, Text as ReactNativeText } from "react-native";

interface Props {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const small = {
  fontSize: 12,
  lineHeight: 14,
};

const medium = {
  fontSize: 18,
  lineHeight: 21,
};

const large = {
  fontSize: 24,
  lineHeight: 28,
};

export function Text(props: Props) {
  const { children, size } = props;
  const style = size === 'small' ? small : size === 'large' ? large : medium;

  const styles = StyleSheet.create({
    text: {
      fontFamily: "Regular",
      ...style,
    }
  });

  return (
    <ReactNativeText style={styles.text}>{children}</ReactNativeText>
  );
}
