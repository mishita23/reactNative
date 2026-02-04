import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";


import styles from  "./Home.styles"
import { AppDrawerProps } from "../../navigation/HomeDrawerNavigator";
type DrawerNavProp = DrawerNavigationProp<AppDrawerProps>
const HomeScreen = () => {
  const navigation = useNavigation<DrawerNavProp>();

  return (
    <View style={styles.container}>
 

      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.subText}>
          Explore your app features from the menu
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Quick Overview</Text>
        <Text style={styles.cardText}>
          This is your home screen. You can show dashboard stats, recent
          activity, or shortcuts here.
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;

