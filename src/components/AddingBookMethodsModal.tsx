import { StyleSheet, Text } from 'react-native';
import Barcode from '../assets/svgs/darkThemed/barcode.svg';
import Keyboard from '../assets/svgs/darkThemed/keyboard.svg';
import Search from '../assets/svgs/darkThemed/search.svg';
import { useTheme } from '../hooks/useTheme';
import CustomModal from './CustomModal';
import Ripple from './Ripple';

type ModalProps = {
  modalVisible?: boolean;
  setModalVisible: (visible: boolean) => void;
};


const AddingBookMethodsModal = ({modalVisible, setModalVisible}: ModalProps) => {
  const theme = useTheme();

  return (
    <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <Ripple style={[styles.button]}>
        <Barcode width={25} height={25} fill={theme.text} />
        <Text style={{color: theme.text}} >Scan barcode</Text>
      </Ripple>
      <Ripple style={[styles.button]}>
        <Keyboard width={25} height={25} fill={theme.text}/>
        <Text style={{color: theme.text}}>input</Text>
      </Ripple>
      <Ripple style={[styles.button]}>
        <Search width={25} height={25} stroke={theme.text}/>
        <Text style={{color: theme.text}}>Search online</Text>
      </Ripple>
    </CustomModal>
  )
}

const styles = StyleSheet.create({
  icons: {
    width: 50,
    height: 50,
    marginBottom: 10
  },
  button: {
    width: '100%',
    minHeight: 64,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 16,
  }
})
export default AddingBookMethodsModal