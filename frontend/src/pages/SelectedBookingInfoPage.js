import { ScrollView, StyleSheet, View } from "react-native";
import ProfileDetail from "../components/molecules/profileDetail";
import BackgroundTemplate from "../components/templates/BackgroundTemplate";
import TextHeading from "../components/atoms/texts/TextHeading";
import Progress from "../components/atoms/progress/progress";
import ButtonBookNow from "../components/atoms/buttons/ButtonBookNow";
import CardBookingSummary from "../components/molecules/ItemCards/CardBookingSummary";
import CardBookingPaymentDropdown from "../components/molecules/ItemCards/CardBookingPaymentDropdown";
import summaryCard from "./../assets/images/booking/summarySecondCard.png";
import { useRoute } from "@react-navigation/native";

export default SelectedBookingInfoPage = ({ navigation }) => {
  const options = ["PayPal", "BitCoin", "FaceCoin"];

  const route = useRoute();
  const selectedFrom = route.params.selectedFrom; // Get the selected "From" data
  const selectedTo = route.params.selectedTo; // Get the selected "To" data
  const selectedDeparture = route.params.selectedDeparture; // Get the selected "Departure" data
  const selectedReturn = route.params.selectedReturn; // Get the selected "Return" data
  const selectedShip = route.params.selectedShip; // Get the selected ship data
  const selectedClass = route.params.selectedClass; // Get the selected class data

  // track the user selected dropdown value
  const handleOptionSelect = (option) => {
    console.log("selected From value: ", option);
  };

  const onPress = () => {
    navigation.navigate("SelectedOnBoardDetails", {
      selectedFrom: selectedFrom,
      selectedTo: selectedTo,
      selectedDeparture: selectedDeparture,
      selectedReturn: selectedReturn,
      selectedShip: selectedShip,
      selectedClass: selectedClass,
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
          <Progress status={"3"} />
        </View>

        <ScrollView>
          <View style={styles.cardSection}>
            <View>
              <TextHeading value={`Summery`} fontSize={20} fontWeight={400} />
            </View>
            <View style={styles.scrollView}>
              <View>
                <CardBookingSummary
                  from={selectedFrom}
                  to={selectedTo}
                  departure={selectedDeparture}
                  returns={selectedReturn}
                  ship={selectedShip}
                  classType={selectedClass}
                  passengers={1}
                  total={"$ 42000.00"}
                  backImage={summaryCard}
                />
              </View>
              <View>
                <TextHeading
                  value={`Payment Option`}
                  fontSize={20}
                  lineHeight={32}
                />
              </View>
              <View style={styles.payment}>
                <CardBookingPaymentDropdown
                  options={options}
                  onSelect={handleOptionSelect}
                  title={"PayPal"}
                  selectOption={"option"}
                />
              </View>
              <View style={styles.nextButton}>
                <ButtonBookNow ButtonName={"Confirm"} onPress={onPress} />
              </View>
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
  cardSection: {
    paddingTop: 30,
  },
  total: {
    paddingLeft: 7,
  },
  payment: {
    paddingTop: 10,
  },
});
