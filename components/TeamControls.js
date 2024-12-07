import React from "react";
import { View, Button, StyleSheet } from "react-native";

const TeamControls = ({ updateScore }) => {
  return (
    <View style={styles.container}>
      <View style={styles.controlGroup}>
        <Button
          color="#4CAF50"
          title="Team A +"
          onPress={() => updateScore("A", "increment")}
        />
        <View style={styles.spacing} />
        <Button
          color="#f44336"
          title="Team A -"
          onPress={() => updateScore("A", "decrement")}
        />
      </View>

      <View style={styles.controlGroup}>
        <Button
          color="#4CAF50"
          title="Team B +"
          onPress={() => updateScore("B", "increment")}
        />
        <View style={styles.spacing} />
        <Button
          color="#f44336"
          title="Team B -"
          onPress={() => updateScore("B", "decrement")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: 20,
  },
  controlGroup: {
    flexDirection: "column",
    alignItems: "center",
  },
  spacing: {
    height: 10,
  },
});

export default TeamControls;
