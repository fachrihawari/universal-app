import React, { ReactNode, ReactType } from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
  StyleProp,
  ViewStyle
} from "react-native";

interface ITouchableProps {
  style: StyleProp<ViewStyle>
  onPress: () => void
  children: ReactNode
}

function Touchable({ children, onPress, style }: ITouchableProps) {
  const Component: ReactType =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return Platform.OS === "android" ? (
    <Component onPress={onPress}>
      <View style={style}>{children}</View>
    </Component>
  ) : (
      <Component style={style} onPress={onPress}>
        {children}
      </Component>
    );
}

export default Touchable;
