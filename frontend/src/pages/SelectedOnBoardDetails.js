import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import ProfileDetail from "../components/molecules/profileDetail";
import BackgroundTemplate from "../components/templates/BackgroundTemplate";
import ButtonBookNow from "../components/atoms/buttons/ButtonBookNow";
import CardBookingOnBoard from "../components/molecules/ItemCards/CardBookingOnBoard";
import BoringPass from "../components/molecules/BoringPass";

export default SelectedOnBoardDetails = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate("CreateNewBookingPage");
  };

  return (
    <BackgroundTemplate justifyContent="flex-start" alignItems={"flex-start"}>
      <View style={styles.container}>
        <ProfileDetail
          userName="Ravindu Dananjith"
          travelerType="Space Traveler"
        />
        <View>
          <Text style={styles.title}>Boarding Pass</Text>
        </View>

        <BoringPass />

        <ScrollView>
          <View style={styles.cardSection}>
            <View style={styles.scrollView}>
              <View style={styles.backCard}>
                <CardBookingOnBoard
                  tripNo={"item.tripNo"}
                  distance={"item.distance"}
                  to={"item.to"}
                  price={"item.price"}
                  date={"item.date"}
                />
                <View style={styles.barcode}>
                  <Image
                    source={require("./../assets/images/booking/barcode.png")}
                  />
                </View>
              </View>

              <View style={styles.nextButton}>
                <ButtonBookNow
                  ButtonName={"Download Ticket"}
                  onPress={onPress}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </BackgroundTemplate>
  );
};

const styles = StyleSheet.create({
  passSection: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
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

  title: {
    color: "white",
    fontFamily: "Urbanist",
    fontSize: 20,
    fontWeight: "500",
    paddingTop: 25,
    paddingLeft: 100,
    paddingTop: 5,
  },

  backCard: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    width: 350,
    height: 450,
    backgroundColor:
      "linear-gradient(146deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.00) 100%)",
  },
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
  barcode: {
    paddingLeft: 10,
  },
});
