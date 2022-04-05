import React, { useState } from "react";
import { Text, TouchableWithoutFeedback, View, Animated } from "react-native";

export default function MyButton({ title, onPress }) {
  return (
    <TouchableWithoutFeedback
      onPressIn={(e) => {
        console.log("user pressed my button");
      }}
      onPressOut={(e) => {
        console.log("user released my button");
      }}
      onPress={onPress}
    >
      <View
        style={{
          backgroundColor: "white",
          width: 200,

          paddingHorizontal: 12,
          paddingVertical: 8,
          borderWidth: 2,
          borderRadius: 4,
          borderColor: "black",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
