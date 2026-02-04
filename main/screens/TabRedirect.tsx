import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const TabRedirect = ({ target }: { target: string }) => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    navigation.replace(target);
  }, []);

  return null;
};

export default TabRedirect;