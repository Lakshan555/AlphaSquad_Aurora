import {
    FlatList,
    Image,
    ImageBackground,
    RefreshControl,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
  } from "react-native";
  import BackgroundTemplate from "../components/templates/BackgroundTemplate";
  import TextHeading from "../components/atoms/texts/TextHeading";
  import CardTripsHistoryItem from "../components/molecules/ItemCards/CardTripsHistoryItem";
  import { useState } from "react";
  import ButtonBookNow from "../components/atoms/buttons/ButtonBookNow";
  import ProfileDetail from "../components/molecules/profileDetail";
  
  export default UpcomingTrips = ({ navigation }) => {
    //refresh state
    const [refresh, setRefresh] = useState(false);
  
    //refresh handler
    const pullUp = () => {
      setRefresh(true);
      setTimeout(() => {
        setRefresh(false);
      }, 200);
    };
    const testArray = [
      {
        tripNo: "#000648",
        distance: "364.67M Km",
        from: "Earth",
        to: "Mars",
        price: "$ 8456.00",
        date: "2200.08.16",
      },
      {
        tripNo: "#000648",
        distance: "364.67M Km",
        from: "Earth",
        to: "Mars",
        price: "$ 8456.00",
        date: "2200.08.16",
      },
      {
        tripNo: "#000648",
        distance: "364.67M Km",
        from: "Earth",
        to: "Mars",
        price: "$ 8456.00",
        date: "2200.08.16",
      },
    ];
  
    const onPress = () => {
      navigation.navigate("CreateNewBookingPage");
    };
  
    const onPreviousTripsHandler = () =>{
        navigation.navigate("BookingHistory");
    }
    const upComingTripsHandler = () =>{
        navigation.navigate("UpcomingTrips");
    }
  
    return (
      <BackgroundTemplate
        justifyContent="flex-start"
        alignItems={"flex-start"}
        paddingTop={50}
      >
        <View style={styles.container}>
          {/*  profile Details */}
          <View>
            <ProfileDetail
              userName="Ravindu Dananjith"
              travelerType="Space Traveler"
            />
          </View>
          {/* tripSection */}
          <View style={styles.tripSection}>
            <TouchableOpacity onPress={onPreviousTripsHandler}>
              <ImageBackground
                style={styles.previousTrips}
                source={require("../assets/images/booking/upcomingTrips.png")}
              >
                <View style={styles.previousTripsCountTitle}>
                  <TextHeading
                    value={"Previous Trips "}
                    fontSize={16}
                    color={"white"}
                    fontWeight={400}
                  />
                </View>
                <View style={styles.previousTripsCount}>
                  <TextHeading
                    value={"10"}
                    fontSize={38}
                    color={"white"}
                    fontWeight={700}
                  />
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={upComingTripsHandler}>
              <ImageBackground
                style={styles.upcomingTrips}
                source={require("../assets/images/booking/previousTrips.png")}
              >
                <View style={styles.previousTripsCountTitle}>
                  <TextHeading
                    value={"Upcoming Trips"}
                    fontSize={16}
                    color={"black"}
                    fontWeight={400}
                  />
                </View>
                <View style={styles.previousTripsCount}>
                  <TextHeading
                    value={"10"}
                    fontSize={38}
                    color={"black"}
                    fontWeight={700}
                  />
                </View>
              </ImageBackground>
            </TouchableOpacity>  
          </View>
          {/* Previous Trips History */}
          <View style={styles.tripHistory}>
            <TextHeading
              value={"Upcoming Trips History"}
              fontSize={20}
              fontWeight={500}
            />
          </View>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refresh} onRefresh={() => pullUp()} />
            }
          >
            <View style={styles.cardTrips}>
              <FlatList
                data={testArray}
                renderItem={({ item }) => (
                  <View>
                    <CardTripsHistoryItem
                      tripNo={item.tripNo}
                      distance={item.distance}
                      from={item.from}
                      to={item.to}
                      price={item.price}
                      date={item.date}
                    />
                  </View>
                )}
              />
  
              <View style={{ marginTop: 5, marginLeft: 25 }}>
                <TouchableOpacity>
                  <TextHeading
                    value={"View all"}
                    fontSize={14}
                    lineHeight={24}
                    fontWeight={600}
                    color={"white"}
                    textAlign={"left"}
                  ></TextHeading>
                </TouchableOpacity>
              </View>
              <View style={{ marginLeft: -20, marginTop: 5 }}>
                <ButtonBookNow ButtonName={"Book Now"} onPress={onPress} />
              </View>
            </View>
          </ScrollView>
        </View>
      </BackgroundTemplate>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      paddingLeft: 30,
    },
    mainDetails: {
      display: "flex",
      flexDirection: "row",
    },
    profileDetails: {
      bottom: 5,
      paddingLeft: 10,
    },
    tripHistory: {
      paddingTop: 20,
    },
    tripSection: {
      display: "flex",
      flexDirection: "row",
      right: 30,
      paddingTop: 40,
    },
    //previousTrips
    previousTrips: {
      borderRadius: 10,
      width: 200,
      height: 88,
      padding: 20,
    },
    previousTripsCountTitle: {
      bottom: 20,
      left: 25,
    },
    previousTripsCount: {
      bottom: 20,
      left: 25,
    },
    upcomingTrips: {
      borderRadius: 10,
      width: 200,
      height: 88,
      padding: 20,
      right: 1,
    },
    cardTrips: {
      right: 23,
      paddingTop: 10,
      paddingBottom: 200,
    },
  });
  