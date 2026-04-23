import React from "react";
import { TextInput, View } from "react-native";

type InputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
};

export default function Input({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
}: InputProps) {
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
          padding: 14,
          borderRadius: 10,
          width: "100%",
        }}
      />
    </View>
  );
}