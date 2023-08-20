import {
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import ProfileDetail from "../components/molecules/profileDetail";
import BackgroundTemplate from "../components/templates/BackgroundTemplate";
import TextHeading from "../components/atoms/texts/TextHeading";
import Progress from "../components/atoms/progress/progress";
import ButtonBookNow from "../components/atoms/buttons/ButtonBookNow";
import CardBookingSummary from "../components/molecules/ItemCards/CardBookingSummary";

export default SelectedBookingInfoPage = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate("CreateNewBookingPage");
  };

  const total = "25000.00";
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

        <View style={styles.cardSection}>
          <View>
            <TextHeading value={`Summery`} fontSize={20} fontWeight={400} />
          </View>
          <ScrollView>
            <View style={styles.scrollView}>
              <View>
                <CardBookingSummary
                  tripNo={"item.tripNo"}
                  distance={"item.distance"}
                  to={"item.to"}
                  price={"item.price"}
                  date={"item.date"}
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
