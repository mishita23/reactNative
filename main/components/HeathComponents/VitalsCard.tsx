import React from 'react';
import { View, Text } from 'react-native';
import GenericTextInput from '../TextInput/TextInput';
import styles from '../HeathComponents/CommonStyle.styles';

type Props = {
  data: Record<string, string>;
  editable: boolean;
  onChange: (key: string, value: string) => void;
};

const VitalsCard: React.FC<Props> = ({ data, editable, onChange }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Vitals</Text>

      <View style={styles.grid}>
        {Object.entries(data).map(([key, value]) => (
          <GenericTextInput
            key={key}
            label={key
              .replace(/_/g, ' ')
              .replace(/^./, char => char.toUpperCase())}
            value={value}
            editable={editable}
            placeholder={key}
            labelStyle={styles.labelText}
            inputStyle={styles.inputText}
            containerStyle={styles.gridItem}
            onChange={v => onChange(key, v)}
          />
        ))}
      </View>
    </View>
  );
};

export default VitalsCard;
