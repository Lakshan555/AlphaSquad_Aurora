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

const SelectedPlanetDetailsPage = () => {

  // Get the route object
  const route = useRoute();
  const navigation = useNavigation();

  // Access the data passed via props
  const data = route.params?.data;

  const onPress = () => {
    navigation.navigate("CreateNewBookingPage");
  };

  

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
              <View style={styles.subTitle}>
                <TouchableOpacity>
                  <TextBody
                    value={"Overview"}
                    fontSize={18}
                    fontWeight={600}
                    color={"#43D2FF"}
                    lineHeight={27}
                    right={70}
                  ></TextBody>
                </TouchableOpacity>
                <TouchableOpacity>
                  <TextBody
                    value={"Reviews"}
                    fontSize={18}
                    fontWeight={600}
                    lineHeight={27}
                  ></TextBody>
                </TouchableOpacity>
              </View>
              <PlanetDetailIconPalette rating={data.rating} temp={data.temperature} duration={data.duration}></PlanetDetailIconPalette>
              <TextBody
                value={data.details}
                textAlign={"justify"}
                fontSize={14}
                fontWeight={400}
              ></TextBody>
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
            <TouchableOpacity onPress={onPress} >
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
    paddingVertical: 18,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  planetPrice: {
    display: "flex",
    flexDirection: "column",
    color: "black",
    // backgroundColor: 'yellow',
    paddingRight: 75,
    textAlignVertical: 'center'
  },
  priceText: {
    paddingTop: 5
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

export default SelectedPlanetDetailsPage;
