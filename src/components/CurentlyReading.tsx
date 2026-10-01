import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Plus from '../assets/svgs/darkThemed/plus.svg';
import { useTheme } from '../hooks/useTheme';
import CustomModal from "./CustomModal";
import Ripple from "./Ripple";
import AddingBookMethodsModal from "./AddingBookMethodsModal";
const CurentlyReading = () => {
  const theme = useTheme()
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
    <View style={styles.container}>
      <Text style={[styles.header, { color: theme.text }]}>Currently reading</Text>
      <View style={styles.booksNav}>
          <Ripple  onTap={() => setModalVisible(true)} style={[styles.card, {backgroundColor: theme.backgroundSecondary}]}>
            
            <Plus color={theme.primary} height={50} width={50}/>
          </Ripple>
      </View>
    </View>
    <AddingBookMethodsModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '50%',
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