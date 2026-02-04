import React from 'react';
import { View, Text } from 'react-native';
import GenericTextInput from '../TextInput/TextInput';
import styles from '../HeathComponents/CommonStyle.styles';

type MedicalInfoProps = {
  data: {
    allergies: string;
    conditions: string;
    medications: string;
  };
  editable: boolean;
  onChange: (key: string, value: string) => void;
};

const MedicalInfo: React.FC<MedicalInfoProps> = ({
  data,
  editable,
  onChange,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Medical Information</Text>

      <GenericTextInput
        label="Allergies"
        value={data.allergies}
        editable={editable}
        labelStyle = {styles.labelText}
        inputStyle = {styles.inputText}
        placeholder="Eg: Dust, Pollen"
        onChange={v => onChange('allergies', v)}
      />

      <GenericTextInput
        label="Existing Conditions"
        value={data.conditions}
        editable={editable}
        labelStyle = {styles.labelText}
        inputStyle = {styles.inputText}
        placeholder="Eg: Asthma, Diabetes"
        onChange={v => onChange('conditions', v)}
      />

      <GenericTextInput
        label="Current Medications"
        value={data.medications}
        editable={editable}
        labelStyle = {styles.labelText}
        inputStyle = {styles.inputText}
        placeholder="Eg: Paracetamol"
        onChange={v => onChange('medications', v)}
      />
    </View>
  );
};



export default MedicalInfo;
