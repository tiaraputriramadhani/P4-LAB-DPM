import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, Button } from "react-native";
import Scoreboard from "./components/Scoreboard";
import TeamControls from "./components/TeamControls";
import ResetButton from "./components/ResetButton";

export default function App() {
  const [teamAName] = useState("Team A");
  const [teamBName] = useState("Team B");
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [winnerMessage, setWinnerMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const updateScore = (team, operation) => {
    if (modalVisible) return;
    if (team === "A") {
      const newScore =
        operation === "increment"
          ? teamAScore + 1
          : Math.max(0, teamAScore - 1);
      setTeamAScore(newScore);
      if (newScore === 10) {
        setWinnerMessage(`${teamAName} Wins!`);
        setModalVisible(true);
      }
    } else if (team === "B") {
      const newScore =
        operation === "increment"
          ? teamBScore + 1
          : Math.max(0, teamBScore - 1);
      setTeamBScore(newScore);
      if (newScore === 10) {
        setWinnerMessage(`${teamBName} Wins!`);
        setModalVisible(true);
      }
    }
  };

  const resetGame = () => {
    setTeamAScore(0);
    setTeamBScore(0);
    setWinnerMessage("");
    setModalVisible(false);
  };

  const closeModalAndReset = () => {
    resetGame();
  };

  return (
    <View style={styles.container}>
      <Scoreboard
        teamAName={teamAName}
        teamAScore={teamAScore}
        teamBName={teamBName}
        teamBScore={teamBScore}
      />
      <TeamControls updateScore={updateScore} />
      <ResetButton resetGame={resetGame} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModalAndReset}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{winnerMessage}</Text>
            <Button title="Close" onPress={closeModalAndReset} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1e2c",
    padding: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
