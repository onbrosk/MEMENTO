import { StyleSheet, Text, View } from "react-native";
import Plus from '../assets/svgs/darkThemed/plus.svg';
import { useTheme } from '../hooks/useTheme';
import Ripple from "./Ripple";
const CurentlyReading = () => {
  const theme = useTheme()

  return (
    <View style={styles.container}>
      <Text style={[styles.header, { color: theme.text }]}>Currently reading</Text>
      <View style={styles.booksNav}>
          <Ripple style={[styles.card, {backgroundColor: theme.backgroundSecondary}]}>
            <Plus color={theme.primary} height={50} width={50}/>
          </Ripple>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    marginLeft: 20
  },
  header: {
    fontSize: 25,
  },
  card: {
    height: 400,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  booksNav: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    marginTop: 25,
  }
})

export default CurentlyReading