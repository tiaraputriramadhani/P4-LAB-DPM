import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Scoreboard = ({ teamAName, teamAScore, teamBName, teamBScore }) => {
  return (
    <View style={styles.container}>
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>{teamAName}</Text>
        <Text style={styles.score}>{teamAScore}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>{teamBName}</Text>
        <Text style={styles.score}>{teamBScore}</Text>
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
    backgroundColor: "#27293d",
    borderRadius: 10,
    marginBottom: 20,
  },
  teamContainer: {
    alignItems: "center",
  },
  teamName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
  },
  score: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#FFD700",
    marginTop: 10,
  },
  divider: {
    width: 2,
    backgroundColor: "#ffffff",
    marginHorizontal: 10,
  },
});

export default Scoreboard;
