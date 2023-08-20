import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default ButtonBlueHalf = ({ onPress, ButtonName }) => {
  return (
    <View style={{ alignSelf: "center" }}>
      <TouchableOpacity
        // style={styles.button}
        onPress={onPress}
      >
        <LinearGradient
          colors={["#150099", "#98C1FF"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{ButtonName}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    // backgroundColor:
    //   linear - gradient("92.44deg, #FFA803 -164.05%, #FFD12E 98.37%"),
    padding: 6,
    width:130,
    margin: 15,
    height: 35,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 0,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    bottom:0,
    fontSize: 15,
  },
});
