import React from 'react';
import { Modal, View, Pressable, Image, Text } from 'react-native';
import styles from './CardDetailsModal.styles';
import MiniCalendar from '../MiniCalender/MiniCalander';

interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  icon?: any;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  visible,
  onClose,
  children,
  title,
  icon,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
  <View style={styles.container}>

  <Pressable
    style={styles.overlay}
    onPress={onClose}
  />
  <View style={styles.sheet}>
    <View style={styles.header}>
      <View style={styles.centerHeader}>
        {icon && <Image source={icon} style={styles.headerIcon} />}
        {title && <Text style={styles.headerTitle}>{title}</Text>}
      </View>

      <Pressable style={styles.closeButton} onPress={onClose}>
        <Image
          source={require('../../assets/icons/crossIcon.png')}
          style={styles.smallIcon}
        />
      </Pressable>
    </View>
      <MiniCalendar />
<View
  style={{
    height: 1,
    backgroundColor: '#555',
    marginVertical: 8,
  }}
/>

    <View style={styles.content}>
      {children}
    </View>
  </View>
</View>

    </Modal>
  );
};

export default BottomSheet;
