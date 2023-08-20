import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BackgroundTemplate from "../components/templates/BackgroundTemplate";
import IconBackwardArrow from "../components/atoms/icons/IconBackwardArrow";
import IconProfileData from "../components/atoms/icons/IconProfileData";
import IconNavigationBar from "../components/atoms/icons/IconNavigationBar";
import IconPlanet from "../components/atoms/icons/IconPlanet";
import CardTripsHistoryItem from "../components/molecules/ItemCards/CardTripsHistoryItem";
import TextBody from "../components/atoms/texts/TextBody";
import TextHeading from "../components/atoms/texts/TextHeading";
import IconEmergencyAssistance from "../components/atoms/icons/IconEmergencyAssistance";
import CustomDropdown from "../components/molecules/ItemCards/CardBookingCustomDropdown";
import { useState } from "react";

export default function Test1({ navigation }) {

  const options = ['Space Station : Ohio - Earth', 'Mercury', 'Jupiter'];

  // track the user selected dropdown value
  const handleFromOption = (option) => {
    console.log('selected From value: ', option)
  };

  const handleToOption = (option) => {
    console.log('selected From value: ', option)
  };

  return (
    <BackgroundTemplate>
    
      {/* custom dropdown */}
      {/* title should be one of these values: 'From', 'To', 'Ship', 'Class' */}
      <View style={styles.container}>
        <CustomDropdown title={'From'} options={options} onSelect={handleFromOption}/>
      </View>

      <View style={styles.container}>
        <CustomDropdown title={'To'} options={options} onSelect={handleFromOption}/>
      </View>

      <View style={styles.container}>
        <CustomDropdown title={'Ship'} options={options} onSelect={handleFromOption}/>
      </View>

      <View style={styles.container}>
        <CustomDropdown title={'Class'} options={options} onSelect={handleFromOption}/>
      </View>


    </BackgroundTemplate>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    // margin: 2,
  },
});
