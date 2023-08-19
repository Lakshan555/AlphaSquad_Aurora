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

export default function Test1({ navigation }) {

  const onSubmit = () => {
    const planetData = {
      id: 1,
      name: 'Mars',
      cost: '$ 4200.00',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/41f6/6690/a676009d8b4985f74650d8491df37085?Expires=1693180800&Signature=D26gk0rg6EFpZTcmt86nDODb46dBGnNbuNOatV3q8ENUDj3w9~zInWRAvwMH5GHE8fVVHvlzlOQB~lvMMSOKsphkIaDPUHPWU1pIJw-C1nnaP1JTLF7BAu2CKNdWPnq3OnkiackP318TYknkj9HpZl~EiG04EoTPLbNxFymbo2CO2zkLMG2TIh~y9LHebbStCZVPNTIdGN4VcyyTfNsJhI4gMBlppirN4vSRZEWMZik23OGbE6vnap1dyzlFDR5ZMaJzaUpgzjTmXWimkk0dWgYU3p001ovO2c9on-FY9SJbkl0DdLJN6U3j6HxDgzkxP~88hOf9UCB5lY-g-OkvZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      rating: '4.5',
      temperature: '38 C',
      duration: '8 Days',
      details: "Mars is the fourth planet from the sun and has a distinct rusty red appearance and two unusual moons.\n\n" +
      "The Red Planet is a cold, desert world within our solar system. It has a very thin atmosphere, but the dusty, lifeless (as far as we know it) planet is far from dull." +
      " Phenomenal dust storms can grow so large they engulf the entire planet, temperatures can get so cold that carbon dioxide in the atmosphere condenses directly into snow or frost, and marsquakes — a Mars version of an earthquake — regularly shake things up.\n\n" +
      "Therefore, it is no surprise that this little red rock continues to intrigue scientists and is one of the most explored bodies in the solar system, according to NASA Science." +
        "The Red Planet is a cold, desert world within our solar system. It has a very thin atmosphere, but the dusty, lifeless (as far as we know it) planet is far from dull.\n\n",
    };

    navigation.navigate("SelectedPlanetDetailsPage", {planetData});
  };
  return (
    <BackgroundTemplate>
      <Text>Open up App.js to start working on your app!</Text>
      <MaterialCommunityIcons
        name="alarm-light"
        size={24}
        color="red"
        onPress={() => {
          console.log("button pressed");
        }}
      />
      <IconBackwardArrow onPress={() => console.log("Button pressed")} />
      <StatusBar style="auto" />

      {/* iconProfileData can be used to display: achievement, payment, privacy */}
      <IconProfileData
        source={require("../assets/images/profileIcons/payment.png")}
      />

      <View style={styles.content}>
        <IconEmergencyAssistance
          source={require("../assets/images/emergencyIcons/emProtocol.png")}
        />
        <IconEmergencyAssistance
          source={require("../assets/images/emergencyIcons/DistressBeacon.png")}
        />
        <IconEmergencyAssistance
          source={require("../assets/images/emergencyIcons/TechnicalSupport.png")}
        />
        <IconEmergencyAssistance
          source={require("../assets/images/emergencyIcons/UniversalTranslator.png")}
          onPress={onSubmit}
        />
      </View>

      {/* iconNavigationBar can be used to display: house, case, earth, rocket, profile */}
      <IconNavigationBar
        source={require("../assets/images/navigationBar/earth.png")}
        onPress={onSubmit}
      />

      {/* icon planet can be used to display: rating.png, temperature.png, cloud.png */}
      <View style={styles.content}>
        <IconPlanet source={require("../assets/images/planetIcons/star.png")} />
        <IconPlanet
          source={require("../assets/images/planetIcons/cloud.png")}
        />
        <IconPlanet
          source={require("../assets/images/planetIcons/rocketRed.png")}
        />
      </View>

      {/* custom texts */}
      <TextHeading value={"dkdkd dkdkd"}></TextHeading>
      <TextBody value={"dkdkd dkdkd"}></TextBody>

      <CardTripsHistoryItem />
    </BackgroundTemplate>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    // margin: 2,
  },
});
