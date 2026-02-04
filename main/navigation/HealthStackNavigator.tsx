import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HealthProfileScreen from '../screens/HealthProfileScreen/HealthPRofileScreen';
import ReportScreen from '../screens/ReportScreen/ReportScreen';

export type HealthStackParamList = {
  HealthHome: undefined;
  HealthReports: undefined
};

const Stack = createNativeStackNavigator<HealthStackParamList>();

const HealthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="HealthHome"
        component={HealthProfileScreen}
        options={{
          title: 'Health',
        }}
      />
      <Stack.Screen
        name="HealthReports"
        component={ReportScreen}
        options={{
          title: 'Reports',
        }}
      />
    </Stack.Navigator>
  );
};

export default HealthStackNavigator;
