import React from "react";
import { View, Button, StyleSheet } from "react-native";

const ResetButton = ({ resetGame }) => {
  return (
    <View style={styles.container}>
      <Button color="#2196F3" title="Reset Game" onPress={resetGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    width: "50%",
  },
});

export default ResetButton;
