import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import summaryCard from "./../../../assets/images/booking/summarySecondCard.png";
import TextHeading from "../../atoms/texts/TextHeading";
import TextBody from "../../atoms/texts/TextBody";

export default function CardBookingSummary({
  from,
  to,
  departure,
  returns,
  ship,
  classType,
  passengers,
}) {
  return (
    <>
      <ImageBackground source={summaryCard} style={styles.background}>
        <View style={styles.allContent}>
          <View style={styles.content}>
            <TextBody value={`From`} fontSize={14} lineHeight={20}></TextBody>
            <TextBody
              value={` ${from}`}
              fontSize={12}
              lineHeight={20}
            ></TextBody>
          </View>
          <View style={styles.content}>
            <TextBody value={`To`} fontSize={14}></TextBody>
            <TextBody value={`${to}`} fontSize={14}></TextBody>
          </View>
          <View style={styles.content}>
            <TextBody
              value={`Departure `}
              fontSize={14}
              lineHeight={15}
            ></TextBody>
            <TextBody
              value={` ${departure}`}
              fontSize={14}
              lineHeight={15}
            ></TextBody>
          </View>

          <View style={styles.content}>
            <TextBody
              value={`Return `}
              fontSize={14}
              lineHeight={15}
            ></TextBody>
            <TextBody
              value={` ${returns}`}
              fontSize={14}
              lineHeight={15}
            ></TextBody>
          </View>
          <View style={styles.content}>
            <TextBody value={`Ship `} fontSize={14} lineHeight={15}></TextBody>
            <TextBody
              value={` ${ship}`}
              fontSize={14}
              lineHeight={15}
            ></TextBody>
          </View>
          <View style={styles.content}>
            <TextBody value={`Class `} fontSize={14} lineHeight={15}></TextBody>
            <TextBody
              value={` ${classType}`}
              fontSize={14}
              lineHeight={15}
            ></TextBody>
          </View>

          <View style={styles.content}>
            <TextBody
              value={`Number of Passengers `}
              fontSize={14}
              lineHeight={15}
            ></TextBody>
            <TextBody
              value={` ${passengers}`}
              fontSize={14}
              lineHeight={15}
            ></TextBody>
          </View>
          <View style={styles.content}>
            <TextBody
              value={`Total `}
              fontSize={20}
              lineHeight={20}
            ></TextBody>
            <TextBody
              value={` ${departure}`}
              fontSize={20}
              lineHeight={20}
            ></TextBody>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    borderRadius: 10,
    width: 360,
    height: 290,
    padding: 20,
    right: 5,
  },
  content: {
    paddingTop: 8,
    margin: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingRight: 16,
  },
  allContent: {
    paddingTop: 10,
  },
});
