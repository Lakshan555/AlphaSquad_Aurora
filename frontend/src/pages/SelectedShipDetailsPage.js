import BackgroundTemplate from "../components/templates/BackgroundTemplate";
import React from "react";
import {
  View,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import TextHeading from "../components/atoms/texts/TextHeading";
import IconBackwardArrow from "../components/atoms/icons/IconBackwardArrow";
import TextBody from "../components/atoms/texts/TextBody";
import IconFavorite from "../components/atoms/icons/IconFavorite";
import IconPlanet from "../components/atoms/icons/IconPlanet";
import PlanetDetailIconPalette from "../components/molecules/PlanetDetailIconPalette";
import { useRoute } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";

const SelectedShipDetailsPage = () => {

  // Get the route object
  const route = useRoute();
  const navigation = useNavigation();

  // Access the data passed via props
  const data = route.params?.data;

  return (
    <BackgroundTemplate>
      <View style={[styles.planetDetailsPageContainer, {}]}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: data.imageSrc}}
            style={styles.dynamicImage}
          />
          <View style={styles.favIconContainer}>
            <IconFavorite></IconFavorite>
          </View>
          <View style={styles.backIconContainer}>
            <IconBackwardArrow onPress={() => navigation.goBack()}></IconBackwardArrow>
          </View>
        </View>
        <ScrollView>
          <View style={styles.secondHalf}>
            <View style={styles.textContainer}>
              <TextHeading
                value={data.name}
                textAlign={"left"}
                lineHeight={54}
                marginBottom={8}
              ></TextHeading>
              {data.shipTypes.map((shipType, index) => (
                <>
                <TextHeading
                value = {`${index+1}. ${shipType}`}
                key={index}
                textAlign={"left"}
                fontSize={14}
                    fontWeight={600}
                    lineHeight={35}
                ></TextHeading>
                <TextBody
                value={"Type: Basic Passenger Shuttle\n"+
                "Features: Compact cabins, standard amenities, communal observation deck.\n"+
                "Travel Speed: Sublight speed\n"+
                "Estimated Cost: $150,000\n"+
                "Travel Experience: Practical and affordable, offering essential comforts for budget-conscious travelers."}
                textAlign={"justify"}
                fontSize={14}
                    fontWeight={400}
                    marginBottom={7}
              ></TextBody>
                </>
            ))}
            </View>
          </View>
        </ScrollView>
        <View style={styles.bookNowButtonContainer}>
          <View style={styles.planetPrice}>
            <View style={styles.priceText}>
              <TextBody
                value={"Total Price"}
                fontSize={19}
                fontWeight={600}
                color={"black"}
                lineHeight={25}
              ></TextBody>
            </View>
            <View style={styles.price}>
              <TextBody
                value={data.cost}
                fontSize={22}
                fontWeight={700}
                color={"black"}
                lineHeight={26}
              ></TextBody>
            </View>
          </View>
          <View>
            <TouchableOpacity>
              <View style={styles.bookNowBtnCover}>
                <TextBody
                  style={styles.bookNowBtn}
                  textAlign={"center"}
                  value={"Book Now"}
                  fontSize={18}
                  color={"white"}
                  lineHeight={30}
                ></TextBody>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </BackgroundTemplate>
  );
};

const styles = StyleSheet.create({
  
  planetDetailsPageContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "",
    alignItems: "center",
    paddingHorizontal: 0,
  },
  imageContainer: {
    position: "relative",
    left: 0,
    right: 0,
  },
  dynamicImage: {
    width: "100%",
    height: "undefined",
    // height: '40%',
    borderBottomLeftRadius: 44,
    borderBottomRightRadius: 44,
    aspectRatio: 27 / 22, //to adjust the height of the dynamic img
  },
  favIconContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "92%",
    right: "10%",
    transform: [{ translateY: -15 }], // move 15 units upward from its original position
  },
  backIconContainer: {
    position: "absolute",
    alignSelf: "flex-start",
    top: "15%",
    left: "8%",
  },
  secondHalf: {
    position: "relative",
  },
  textContainer: {
    minHeight: "50%",
    padding: 30,
    paddingTop: 20,
  },
  textContent: {
    marginTop: 20,
  },
  subTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  // bottom nav bar
  // bottomNavButtonContainer: {
  //     position: 'absolute',
  //     alignSelf: 'center',
  //     top: '90%',
  //     right: '10%',
  // },
  bookNowButtonContainer: {
    // minWidth: 300,
    alignSelf: "center",
    // width: '83%',
    minHeight: 85,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  planetPrice: {
    display: "flex",
    flexDirection: "column",
    color: "black",
    // backgroundColor: 'yellow',
    paddingRight: 75,
  },
  priceText: {
    paddingTop: 5,
  },
  price: {},
  bookNowBtnCover: {
    backgroundColor: "#310D4E",
    color: "white",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    fontSize: 18,
  },
  bookNowBtn: {
    textAlignVertical: "center",
  },
});

export default SelectedShipDetailsPage;
