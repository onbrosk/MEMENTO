import { StyleSheet, Text, View } from "react-native";
import { useTheme } from '../../hooks/useTheme';
export default function Index() {
  const theme = useTheme();


  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.text }}>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
