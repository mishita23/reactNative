import React from 'react';
import { View, Text } from 'react-native';
import GenericTextInput from '../TextInput/TextInput';
import styles from '../HeathComponents/CommonStyle.styles';

type LifestyleInfoProps = {
  data: {
    smoking: string;
    alcohol: string;
    exercise: string;
    diet: string;
  };
  editable: boolean;
  onChange: (key: string, value: string) => void;
};

const LifestyleInfo: React.FC<LifestyleInfoProps> = ({
  data,
  editable,
  onChange,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Lifestyle</Text>

      <View style={styles.grid}>
        <GenericTextInput
          label="Smoking"
          value={data.smoking}
          editable={editable}
          labelStyle={styles.labelText}
          inputStyle={styles.inputText}
          containerStyle={styles.gridItem}
          placeholder="Yes / No"
          onChange={v => onChange('smoking', v)}
        />

        <GenericTextInput
          label="Alcohol"
          value={data.alcohol}
          editable={editable}
          labelStyle={styles.labelText}
          inputStyle={styles.inputText}
          containerStyle={styles.gridItem}
          placeholder="Never / Occasionally"
          onChange={v => onChange('alcohol', v)}
        />

        <GenericTextInput
          label="Exercise"
          value={data.exercise}
          labelStyle={styles.labelText}
          inputStyle={styles.inputText}
          containerStyle={styles.gridItem}
          editable={editable}
          placeholder="3x per week"
          onChange={v => onChange('exercise', v)}
        />

        <GenericTextInput
          labelStyle={styles.labelText}
          inputStyle={styles.inputText}
          containerStyle={styles.gridItem}
          label="Diet"
          value={data.diet}
          editable={editable}
          placeholder="Vegetarian / Vegan"
          onChange={v => onChange('diet', v)}
        />
      </View>
    </View>
  );
};

export default LifestyleInfo;
