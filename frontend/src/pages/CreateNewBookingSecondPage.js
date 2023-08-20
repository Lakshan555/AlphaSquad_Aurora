import { ScrollView, StyleSheet, View } from "react-native";
import ProfileDetail from "../components/molecules/profileDetail";
import BackgroundTemplate from "../components/templates/BackgroundTemplate";
import TextHeading from "../components/atoms/texts/TextHeading";
import Progress from "../components/atoms/progress/progress";
import ButtonBookNow from "../components/atoms/buttons/ButtonBookNow";
import CustomDropdown from "../components/molecules/ItemCards/CardBookingCustomDropdown";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";

export default CreateNewBookingSecondPage = ({ navigation }) => {
  const route = useRoute();
  const selectedFrom = route.params.selectedFrom; // Get the selected "From" data
  const selectedTo = route.params.selectedTo; // Get the selected "To" data
  const selectedDeparture = route.params.selectedDeparture; // Get the selected "Departure" data
  const selectedReturn = route.params.selectedReturn; // Get the selected "Return" data

  const total = "42000.00";
  const options = ["Community Ships", "Federation", "Galactic Corp.Inc"];
  const classes = ["Business", "Luxury", "Economy"];

  //use States
  const [selectedShip, setSelectedShip] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  // track the user selected dropdown value

  const handleOptionSelect = (option, dropdown) => {
    if (dropdown === "ship") {
      setSelectedShip(option);
    } else if (dropdown === "class") {
      setSelectedClass(option);
    }
  };

  const onPress = () => {
    navigation.navigate("SelectedBookingInfoPage", {
      selectedShip: selectedShip,
      selectedClass: selectedClass,
      selectedFrom: selectedFrom,
      selectedTo: selectedTo,
      selectedDeparture: selectedDeparture,
      selectedReturn: selectedReturn,
    });
  };

  return (
    <BackgroundTemplate justifyContent="flex-start" alignItems={"flex-start"}>
      <View style={styles.container}>
        <ProfileDetail
          userName="Ravindu Dananjith"
          travelerType="Space Traveler"
        />
        <View style={styles.heading}>
          <TextHeading
            value={"Book Your  "}
            fontSize={40}
            color={"white"}
            fontWeight={700}
            lineHeight={80}
          />
          <TextHeading
            value={"Ship"}
            fontSize={40}
            color={"white"}
            fontWeight={700}
            lineHeight={80}
            bottom={30}
          />
        </View>
        <View>
          <Progress status={"2"} />
        </View>

        <View style={styles.cardSection}>
          <ScrollView>
            <View style={styles.scrollView}>
              <View>
                <CustomDropdown
                  options={options}
                  onSelect={(option) => handleOptionSelect(option, "ship")}
                  title={"Ship"}
                  selectOption={"option"}
                />
              </View>
              <View>
                <CustomDropdown
                  options={classes}
                  onSelect={(option) => handleOptionSelect(option, "class")}
                  title={"Class"}
                  selectOption={"option"}
                />
              </View>
              <View style={styles.total}>
                <TextHeading
                  value={`Total : $ ${total}`}
                  fontSize={28}
                  fontWeight={400}
                />
              </View>
              <View style={styles.nextButton}>
                <ButtonBookNow ButtonName={"Next"} onPress={onPress} />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </BackgroundTemplate>
  );
};

const styles = StyleSheet.create({
  buttonSection: {
    display: "flex",
    flexDirection: "row",
    gap: 22,
    paddingTop: 15,
  },
  twoWayButton: {
    width: 160,
    height: 65,
  },
  oneWayButton: {
    width: 160,
    height: 73,
  },
  buttonText: {
    left: 48,
    bottom: 7,
  },
  container: {
    paddingLeft: 30,
    paddingTop: 80,
  },
  heading: {
    paddingTop: 10,
  },
  scrollView: {
    paddingBottom: 200,
  },
  nextButton: {
    right: 12,
  },
  cardSection: {
    paddingTop: 30,
  },
  total: {
    paddingLeft: 7,
  },
});
