import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    //   <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
    //     <View style={styles.goalsItem}>
    //       <Text style={styles.goalText}>{props.text}</Text>
    //     </View>
    //     </Pressable>

    <View style={styles.goalsItem}>
      <Pressable
        android_ripple={{ color: "#451583" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalsItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "#fd7e14",
    fontWeight: "bold",
    padding: 8,
  },
});
