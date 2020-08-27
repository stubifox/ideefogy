// * This File is holding all the expo-Icons and carries out specific functions to export them by giving them props

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

interface GeneralIconProps {
  name: string;
  color?: string;
}

const BottomBarIconStyles = {
  marginBottom: -3,
};

export const Font5Icon = (props: GeneralIconProps) => (
  <FontAwesome5 size={20} style={BottomBarIconStyles} {...props} />
);
export const OcticonIcon = (props: GeneralIconProps) => (
  <Octicons size={24} style={BottomBarIconStyles} {...props} />
);
