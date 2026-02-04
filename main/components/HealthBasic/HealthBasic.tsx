import React from 'react';
import { View, Image, Linking, TouchableOpacity, Text } from 'react-native';

import styles from '../HeathComponents/CommonStyle.styles';
import GenericTextInput from '../TextInput/TextInput';

type Props = {
  data: Record<string, string>;
  editable: boolean;
  onChange: (key: string, value: string) => void;
};

const HealthBasic: React.FC<Props> = ({ data, editable, onChange }) => {
  const handleCall = () => {
    Linking.openURL(`tel:${data.emergencyContact}`);
  };

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Basic Information</Text>
      </View>

      <View style={styles.avatarWrapper}>
        <Image
          source={require('../../assets/icons/user.png')}
          style={styles.avatar}
        />
      </View>

      <GenericTextInput
        label="Name"
        value={data.name}
        editable={editable}
        placeholder="Full Name"
        labelStyle={styles.labelText}
        inputStyle={styles.inputText}
        onChange={v => onChange('name', v)}
      />
      <View style={styles.grid}>
        <GenericTextInput
          label="Age"
          value={data.age}
          editable={editable}
          containerStyle={styles.gridItem}
          placeholder="Age"
          labelStyle={styles.labelText}
          inputStyle={styles.inputText}
          onChange={v => onChange('age', v)}
        />

        <GenericTextInput
          label="Gender"
          value={data.gender}
          editable={editable}
          placeholder="Gender"
          labelStyle={styles.labelText}
          containerStyle={styles.gridItem}
          inputStyle={styles.inputText}
          onChange={v => onChange('gender', v)}
        />

        <GenericTextInput
          label="Blood Group"
          value={data.bloodGroup}
          labelStyle={styles.labelText}
          inputStyle={styles.inputText}
          editable={editable}
          containerStyle={styles.gridItem}
          placeholder="Blood Group"
          onChange={v => onChange('bloodGroup', v)}
        />
      </View>

      <View style={styles.emergencyBox}>
        <View style={{ flex: 1 }}>
          <GenericTextInput
            label="Emergency Contact"
            value={data.emergencyContact}
            editable={editable}
            placeholder="Phone number"
            labelStyle={styles.labelText}
            inputStyle={styles.inputText}
            onChange={v => onChange('emergencyContact', v)}
          />
        </View>

        <TouchableOpacity onPress={handleCall} style={styles.callButton}>
          <Image
            source={require('../../assets/icons/call.png')}
            style={styles.callIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HealthBasic;
