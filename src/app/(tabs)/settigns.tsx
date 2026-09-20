import { useTheme } from "@/hooks/useTheme";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const theme = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.text }}>This is settings tab</Text>
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
