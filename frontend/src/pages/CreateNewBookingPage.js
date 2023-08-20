import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import ProfileDetail from "../components/molecules/profileDetail";
import BackgroundTemplate from "../components/templates/BackgroundTemplate";
import TextHeading from "../components/atoms/texts/TextHeading";
import Progress from "../components/atoms/progress/progress";
import ButtonBookNow from "../components/atoms/buttons/ButtonBookNow";
import CustomDropdown from "../components/molecules/ItemCards/CardBookingCustomDropdown";
import { useState } from "react";

export default CreateNewBookingPage = ({ navigation }) => {
 
  
  const options = ["Earth", "Mercury", "Jupiter"];
  const dateOptions = ["2200.12.18", "2200.12.19", "2200.12.20"];
  const returnOptions = ["2201.12.18", "2201.12.19", "2201.12.20"];
  
  const [selectedFrom, setSelectedFrom] = useState("");
  const [selectedTo, setSelectedTo] = useState("");
  const [selectedDeparture, setSelectedDeparture] = useState("");
  const [selectedReturn, setSelectedReturn] = useState("");
  
  // track the user selected dropdown value
  const handleOptionSelect = (option, dropdown) => {
    if (dropdown === "from") {
      setSelectedFrom(option);
    } else if (dropdown === "to") {
      setSelectedTo(option);
    } else if (dropdown === "departure") {
      setSelectedDeparture(option);
    } else if (dropdown === "return") {
      setSelectedReturn(option);
    }
  };

  const onPress = () => {
    navigation.navigate("CreateNewBookingSecondPage", {
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
          <Progress status={"1"} />
        </View>

        {/* buttonSection */}
        <View style={styles.buttonSection}>
          <TouchableOpacity>
            <ImageBackground
              source={require("../assets/images/booking/oneWay.png")}
              style={styles.oneWayButton}
            >
              <View style={styles.buttonText}>
                <TextHeading
                  value={"Two way"}
                  fontSize={14}
                  color={"white"}
                  fontWeight={700}
                  lineHeight={80}
                  bottom={0}
                />
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground
              source={require("../assets/images/booking/twoWay.png")}
              style={styles.twoWayButton}
            >
              <View style={styles.buttonText}>
                <TextHeading
                  value={"One way"}
                  fontSize={14}
                  color={"white"}
                  fontWeight={700}
                  lineHeight={80}
                  bottom={0}
                />
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.scrollView}>
            <View>
              <CustomDropdown
                options={options}
                onSelect={(option) => handleOptionSelect(option, "from")}
                title={"From"}
                selectOption={"option"}
              />
            </View>
            <View>
              <CustomDropdown
                options={options}
                onSelect={(option) => handleOptionSelect(option, "to")}
                title={"To"}
                selectOption={"option"}
              />
            </View>
            <View>
              <CustomDropdown
                options={dateOptions}
                onSelect={(option) => handleOptionSelect(option, "departure")}
                title={"Departure"}
                selectOption={"date"}
              />
            </View>
            <View>
              <CustomDropdown
                options={returnOptions}
                onSelect={(option) => handleOptionSelect(option, "return")}
                title={"Return"}
                selectOption={"date"}
              />
            </View>
            <View style={styles.nextButton}>
              <ButtonBookNow ButtonName={"Next"} onPress={onPress} />
            </View>
          </View>
        </ScrollView>
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
});
