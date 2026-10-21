import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
const searchOnline = () => {
  const theme = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text>searchOnline</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



export default searchOnline