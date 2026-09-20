import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { colors } from '../constants/colors';

export default function Index() {
  const colorScheme = useColorScheme();
  console.log(typeof (colors))
  const theme = colorScheme === "dark" ? colors.dark : colors.light;

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
