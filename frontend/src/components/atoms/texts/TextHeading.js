import React, { useState } from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import {useFonts} from 'expo-font';

// use this for texts which are above 400 font weight
export default function TextHeading({ value, fontSize, lineHeight, fontWeight, textAlign, marginBottom, color, opacity,bottom}) {
  
  // set custom fonts
  const [loaded] = useFonts({
    Urbanist: require('../../../assets/fonts/Urbanist-Bold.ttf'),
    UrbanistSemiBold: require('../../../assets/fonts/Urbanist-SemiBold.ttf')
  });

  if (!loaded) {
    return null;
  }

  const customStyles = {
    ...styles.Heading,
    fontSize: fontSize || styles.Heading.fontSize, // Use prop value or default
    lineHeight: lineHeight || styles.Heading.lineHeight,
    fontWeight: fontWeight || styles.Heading.fontWeight,
    textAlign: textAlign || styles.Heading.textAlign, 
    marginBottom: marginBottom || styles.Heading.marginBottom,
    color: color || styles.Heading.color,
    opacity: opacity || styles.Heading.opacity,
    bottom: bottom || styles.Heading.bottom
  };

  return (
    <View>
      <Text style={{ ...customStyles, fontFamily: 'Urbanist' }}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Heading: {
    fontSize: 36,
    color: 'white',
    lineHeight: 39,
    // fontStyle: "bold",
    fontWeight: 600,
    textAlign: "left",
    marginBottom: 0,
    opacity: 1,
    bottom:0
  },
});
