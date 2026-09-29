import { StyleSheet, View } from "react-native";
import CurentlyReading from "../../components/CurentlyReading";
import { useTheme } from '../../hooks/useTheme';
export default function Index() {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <CurentlyReading />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
