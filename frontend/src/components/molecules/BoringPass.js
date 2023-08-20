import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import TextHeading from "../atoms/texts/TextHeading";

export default BoringPass = ({to,from}) => {
  return (
    <View style={styles.passSection}>
      <Image source={require("../../assets/images/booking/earth.png")} />
      <Text style={styles.firstTitle}>Earth</Text>

      <Image
        style={styles.middleImg}
        source={require("../../assets/images/booking/line.png")}
      />
      <Text style={styles.secondTitle}>Mars</Text>
      <Image
        style={styles.lastImg}
        source={require("../../assets/images/booking/mass.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  passSection: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom:15,
  },
  firstTitle: {
    color: "white",
    fontFamily: "Urbanist",
    fontSize: 18,
    fontWeight: "500",
    paddingLeft: 10,
    paddingTop: 5,
  },
  secondTitle: {
    color: "white",
    fontFamily: "Urbanist",
    fontSize: 18,
    fontWeight: "500",
    paddingLeft: 25,
    paddingTop: 5,
  },

  middleImg: {
    left: 11,
    top: 15,
  },
  lastImg: {
    left: 10,
  },
});
