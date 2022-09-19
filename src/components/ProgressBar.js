import React from "react";

import { View } from "react-native";

const ProgressBar = (props) => {
  const { progress, total } = props;
  const progressPercentage = (progress / total) * 100;
  return (
    <View
      style={{
        height: 5,
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: "100",
      }}
    >
      <View
        style={{
          height: "100%",
          width: progressPercentage + "%",
          backgroundColor: progressPercentage > 50 ? "#6dc456" : "#f16049",
          borderRadius: "100",
        }}
      />
    </View>
  );
};

export default ProgressBar;
