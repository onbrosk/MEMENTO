import React from 'react';
import { Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { useTheme } from '../hooks/useTheme';

type ModalProps = {
  modalVisible?: boolean;
  setModalVisible: (visible: boolean) => void;
  children: React.ReactNode;
};

const CustomModal = ({ modalVisible = false, setModalVisible, children }: ModalProps) => {
  const theme = useTheme();

  return (
    <Modal
      animationType="fade"
      transparent
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styles.backdrop}>
          <TouchableWithoutFeedback>
            <View style={[ styles.modalContent, { backgroundColor: theme.backgroundSecondary }]}>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    height: '50%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
});

export default CustomModal