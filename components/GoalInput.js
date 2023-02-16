import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
  Text,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHander(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <Text style={styles.titre}>BATH APPLICATION</Text>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/IMG-20230131-WA0046.jpeg")}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Nom & Prenom ?"
          onChangeText={goalInputHander}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Ajouter" onPress={addGoalHandler} color="#fd7e14" />
          </View>
          <View style={styles.button}>
            <Button title="Retour" onPress={props.onCancel} color="#D66304" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // paddingBottom: 24,
    padding: 16,
    // borderBottomWidth: 1,
    //     borderBottomColor: "#cccccc",
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
    borderColor: "#fd7e14",
    borderWidth: 2,
    borderRadius: 100,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#fd7e14",
    backgroundColor: "#fff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    // marginRight: 8,
    padding: 16,
  },
  buttonContainer: {
    marginTop: 8,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  titre: {
    marginTop: 70,
    marginLeft: 15,
    marginRight: 15,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    borderColor: "#fd7e14",
    borderWidth: 3,
    color: "#DD6502",
  },
});
