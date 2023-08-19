import React, { useState } from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { useFonts } from 'expo-font';

// use this for texts which are below 400 font weight
export default function TextBody({ value, fontSize, lineHeight, fontWeight, textAlign, marginBottom, color, right, opacity}) {
  
  const [loaded] = useFonts({
    Jost: require('../../../assets/fonts/Jost-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }
  
  const customStyles = {
    ...styles.TextSmall,
      fontSize: fontSize || styles.TextSmall.fontSize, // Use prop value or default
      lineHeight: lineHeight || styles.TextSmall.lineHeight,
      fontWeight: fontWeight || styles.TextSmall.fontWeight,
      textAlign: textAlign || styles.TextSmall.textAlign, 
      marginBottom: marginBottom || styles.TextSmall.marginBottom,
      marginRight: right || styles.TextSmall.marginRight,
      color: color || styles.TextSmall.color,
      opacity: opacity || styles.TextSmall.opacity,
  };

  return (
    <View>
        <Text style={{...customStyles, fontFamily: 'Jost'}}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  TextSmall: {
    fontSize: 10,
    color: 'white',
    lineHeight: 20,
    fontWeight: 400,
    fontStyle: 'normal',
    textAlign: "left",
    marginBottom: 0,
    marginRight: 0,
    opacity: 1,
    fontFamily: 'Roboto'
  },
});
