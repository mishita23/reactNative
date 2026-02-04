import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";

const DummyScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
        <Text></Text>
    </View>
  );
};
export default DummyScreen
