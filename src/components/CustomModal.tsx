import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Modal, Pressable, StyleSheet, View, useWindowDimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTheme } from '../hooks/useTheme';

type ModalProps = {
  modalVisible?: boolean;
  setModalVisible: (visible: boolean) => void;
  children: React.ReactNode;
};

const CustomModal = ({ modalVisible = false, setModalVisible, children }: ModalProps) => {
  const theme = useTheme();
  const { height } = useWindowDimensions();
  const [isRendered, setIsRendered] = useState(modalVisible);
  const isRenderedRef = useRef(modalVisible);
  const backdropOpacity = useRef(new Animated.Value(0)).current;
  const sheetTranslateY = useRef(new Animated.Value(height)).current;

  useEffect(() => {
    if (modalVisible) {
      isRenderedRef.current = true;
      setIsRendered(true);

      const animation = Animated.parallel([
        Animated.timing(backdropOpacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(sheetTranslateY, {
          toValue: 0,
          duration: 260,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]);

      animation.start();
      return () => animation.stop();
    }

    if (!isRenderedRef.current) {
      return;
    }

    const animation = Animated.parallel([
      Animated.timing(backdropOpacity, {
        toValue: 0,
        duration: 160,
        useNativeDriver: true,
      }),
      Animated.timing(sheetTranslateY, {
        toValue: height,
        duration: 220,
        easing: Easing.in(Easing.cubic),
        useNativeDriver: true,
      }),
    ]);

    animation.start(({ finished }) => {
      if (finished) {
        isRenderedRef.current = false;
        setIsRendered(false);
      }
    });

    return () => animation.stop();
  }, [backdropOpacity, height, modalVisible, sheetTranslateY]);

  return (
    <Modal
      animationType="none"
      transparent
      visible={isRendered}
      onRequestClose={() => setModalVisible(false)}
    >
      <GestureHandlerRootView style={styles.gestureRoot}>
        <View style={styles.backdrop}>
          <Animated.View
            pointerEvents="none"
            style={[StyleSheet.absoluteFill, styles.dimmedBackground, { opacity: backdropOpacity }]}
          />
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Close modal"
            onPress={() => setModalVisible(false)}
            style={StyleSheet.absoluteFill}
          />
          <Animated.View
            style={[
              styles.modalContent,
              {
                backgroundColor: theme.backgroundSecondary,
                transform: [{ translateY: sheetTranslateY }],
              },
            ]}
          >
            {children}
          </Animated.View>
        </View>
      </GestureHandlerRootView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  gestureRoot: {
    flex: 1,
  },
  backdrop: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  dimmedBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
  modalContent: {
    height: 'auto',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
});

export default CustomModal