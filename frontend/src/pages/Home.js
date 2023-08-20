import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from "react-native";
import BackgroundTemplate from "../components/templates/BackgroundTemplate";
import PopularPlanetSlider from "../components/organisms/ImageSliders/PopularPlanetSlider";
import SearchBar from "../components/molecules/SearchBar";
import TextBody from "../components/atoms/texts/TextBody";
import IconEmergencyAssistance from "../components/atoms/icons/IconEmergencyAssistance";
import TextHeading from "../components/atoms/texts/TextHeading";
import CardPopularDestinationLarge from "../components/molecules/ItemCards/CardPopularDestinationLarge";
import DistressBeaconPopup from "../components/molecules/DistressBeaconPopup";
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get(apiUrl)
  //     .then(response => {
  //       setData(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, [apiUrl]);

  const navigation = useNavigation();

  const handleUniversalTranslatorButton = () => {
    navigation.navigate("TranslationScreen");
  }
  
  const allPlanets = [
    {
      id: 1,
      name: 'Mars',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/41f6/6690/a676009d8b4985f74650d8491df37085?Expires=1693180800&Signature=D26gk0rg6EFpZTcmt86nDODb46dBGnNbuNOatV3q8ENUDj3w9~zInWRAvwMH5GHE8fVVHvlzlOQB~lvMMSOKsphkIaDPUHPWU1pIJw-C1nnaP1JTLF7BAu2CKNdWPnq3OnkiackP318TYknkj9HpZl~EiG04EoTPLbNxFymbo2CO2zkLMG2TIh~y9LHebbStCZVPNTIdGN4VcyyTfNsJhI4gMBlppirN4vSRZEWMZik23OGbE6vnap1dyzlFDR5ZMaJzaUpgzjTmXWimkk0dWgYU3p001ovO2c9on-FY9SJbkl0DdLJN6U3j6HxDgzkxP~88hOf9UCB5lY-g-OkvZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      cost: '$ 4200.00',
      rating: '4',
      temperature: '-80 °C',
      duration: '5 Days',
      details: "Mars is the fourth planet from the sun and has a distinct rusty red appearance and two unusual moons.\n\n" +
      "The Red Planet is a cold, desert world within our solar system. It has a very thin atmosphere, but the dusty, lifeless (as far as we know it) planet is far from dull." +
      " Phenomenal dust storms can grow so large they engulf the entire planet, temperatures can get so cold that carbon dioxide in the atmosphere condenses directly into snow or frost, and marsquakes — a Mars version of an earthquake — regularly shake things up.\n\n" +
      "Therefore, it is no surprise that this little red rock continues to intrigue scientists and is one of the most explored bodies in the solar system, according to NASA Science." +
        "The Red Planet is a cold, desert world within our solar system. It has a very thin atmosphere, but the dusty, lifeless (as far as we know it) planet is far from dull.\n\n",
    },
    {
      id: 2,
      name: 'Mercury',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/de51/b8fa/04339ff0abc9268a3f4df02a1887e193?Expires=1693180800&Signature=a-EN0XQmZbYGJLLLoxZxWJkUCruyUZoWQi3EjCSvek7UUb8b6LQRNy-g5MK~3XalDL6ZSfuKU~SU4~f-q1ZBcGjtPozveynfGBW9o1wjBVW49oLgxpJ0hXCN3Clrj5mNztYJxqU6VSbrmFE4TgQRRP2C3rnKH9PDFMQe9T6yIYFYwt-qrCezWPGeCO7zT7-N4yLwdPZ8b9wiO7rZ0DTtYhAqlR3HM3yZZYs07P3-PJv6Mre-sLQNq04a5yONSqGjIx~P~MG7Zmj9Bxgk9FsoT4JowmfR99B1Mo2oC0xBYSgDL8fJS-32A80il~NsLDPNWsQmth3OAE2L4I8V9nQDEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      cost: '$ 7000.00',
      rating: '4.5',
      temperature: '430 °C',
      duration: '2 Days',
      details: "Mercury is the closest planet to the Sun and is also the smallest planet in the Sun's family.\n\n" +
      "It has a very thin atmosphere, almost negligible, which means it can't retain heat effectively, leading to the extreme temperature fluctuations mentioned above." +
      "Its surface is rocky and heavily cratered, resembling the Moon.\n\n" +
      "Despite its proximity to the Sun, some of the polar regions of Mercury are thought to have craters that are permanently shadowed." +
      "Mercury is a fascinating planet with unique characteristics, from its slow rotation and extreme temperature variations to its intriguing surface features.\n\n",
    },
    {
      id: 3,
      name: 'Venus',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/3260/6ea4/cb66b8d5c3420c01336925eef080adc0?Expires=1693180800&Signature=aJvqsAA4Raav40xYpR9TX~witbuBD2w7ppGL6epXmpuqG8KunvNTudP4EKZTFo9r34NcQTvv~ZVnXxu9Pyzw114A4WlRrEWFYVzpELM8m7vIXOIpioYiXSNcU1zZfOqNnmbc27tJQeK86UnXIubuzgxN~eaodXLWz~h6KnRHa4sal9g7oXeRV4rYC8N~H77UkzXzEsb6OoBY5sAOHntjtSY47IfNj1U4mt7fInJUrpdyDtlXysd0tNrsRiH9AHqsO6Nr9mXYYf~93l8sNPiMhiklqBJsqK8us4BopgUB4AleBcssXWeLi3TKWLZy3NB2ZzFYXk7-Yz6iF0Ki8cjgzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      cost: '$ 4200.00',
      rating: '4.7',
      temperature: '470 °C',
      duration: '3 Days',
      details: "Venus is the second planet from the Sun and is often referred to as Earth's sister planet due to their similar size and composition.\n\n" +
      "A blistering atmosphere, hotter than even Mercury's surface, envelopes this world." +
      "Venus' tumultuous winds and toxic atmosphere offer a stark contrast to its ethereal brilliance in the sky.\n\n" +
      "Its unique rotation and day-night cycle make it one of the most intriguing objects in the sun’s family.\n\n",
    },
    {
      id: 4,
      name: 'Earth',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/e37b/f7a0/61839add0eaa454eadb0bc28afde8272?Expires=1693180800&Signature=Jp5Y7nkmccYKVhhgnlOiVxTUuBVbqCmndVnYE2LXHvY-wbP3oFm8JKIXBj63vu1bFIlmsb~jYr8gYVIevbv1iaE4DiXCvo5pZb8KLqCZ9UFU2aLvsZrJepsBGEs-0KuIQcdc85MkJvdVdcUy1b0GTTxGJaPa6zDyzw~1lg4agu2ks-2A9YCRydoDx6RmowltHHkikd9cpKJZ4x~ciYWV8WHdbRlgfYAGlLCHoWIX6FAKk1BGxqKfUeGXiI-~mJplszUCOKW~9hXvooVYQvkra~ERR9oOK7A2S~GRA-EcD~ewrqCafwtAbS7~LVmEHtfkE4y5qpobnHCHQCHHa-R5kA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      cost: '$ 4400.00',
      rating: '5',
      temperature: '15 °C',
      duration: '4 Days',
      details: "Earth is the third planet from the Sun.\n\n" +
      "Earth is a dynamic and complex planet that sustains a rich diversity of life." +
      "Earth has a diverse and life-supporting atmosphere primarily composed of nitrogen (about 78%) and oxygen (about 21%).\n\n" +
      "Earth's surface features include continents, oceans, mountains, valleys, deserts, and more. About 71% of Earth's surface is covered by water, with the remaining 29% being land." +
      "Biodiversity is distributed across different ecosystems, including forests, grasslands, oceans, and more.\n\n",
    },
    {
      id: 5,
      name: 'Jupiter',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/be55/a4f7/8a82361ca635b25abfcafdfbd660d926?Expires=1693180800&Signature=qpbAmUB9UqyuXdYrEjwjxWrNyv0Ev2DMgNuBlsIvjTNnoapKlZa9sHvW7ocMa1SShgjnAVSoNkm54LUtAZKDBMR9CdzZ1S3mscxjzNzGwo3TNuOAttp53CtHSr~wQhMsGRrqo70WK~mcAabnnHzA0H20BpXZVgRf0OAlA0GUS81qdHQpNqG3JPmsWXbUGARfmowHwvdUv0VW-MwD8ZgAP0JGlMoYL1kugJIvu1EzVAM3I1O~BW~LtYKkdZB9pYy-XIphDUGSkLSJZz7Rz5dCpjwbiV4~q~RBgVi7wu6ZBPZP2B3cC5qgFL~fU70X24jhrhlfup7K57~UIcb6O5bgOw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      cost: '$ 4200.00',
      rating: '3.5',
      temperature: '-145 °C',
      duration: '7 Days',
      details: "Jupiter, the gas giant king, boasts a vibrant array of cloud bands and belts that encircle its massive form.\n\n" +
      "The Great Red Spot, a centuries-old storm, draws the eye as a testament to its dynamic atmosphere." +
      "Its family of moons, including Europa's subsurface ocean and Io's volcanic activity, add layers to Jupiter's captivating story.\n\n",
    },
    {
      id: 6,
      name: 'Saturn',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/95d1/5a3f/83ebd015165ed7e61b530f0e58b395b5?Expires=1693180800&Signature=ddyGScNS60wzqRWa6A2uWKLETTh9i8NBH17AXvlTjxLSZd76IEzSMi6wm8QE1gJxQjrbKhY~eeGx80BXu--XvjO6nfbfH3x87ACWtHZNn3Ex6kDgVLylxgMTh2luT3s4~Ql4FPU-KyoPLTrbpm1lr5oQ4q6S0doG82xUuwIZZWvHj6MngioC64Y6NQaTp3G9BLYa8agDK1DW8n28FEQNmKSbJ3IeymtBYmW9EmCz1MSV5MBcr8r3xqtz4gD-EJ4Jq1CKY5rxY8CEnZ57lQUZRvo8F6PTUI2h-c7Z1Ijgy0OmHxXwrgmioSLGPVgk-lEfTfOtY3CFWUePXx4gRZKPng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      cost: '$ 5200.00',
      rating: '4.5',
      temperature: '-178 °C',
      duration: '14 Days',
      details: "Saturn, with its iconic rings, stands as a celestial jewel.\n\n" +
      "These intricate rings, composed of icy particles, dance around its equator in an ethereal display." +
      "Beyond its rings, Saturn's moons offer realms of their own: icy Enceladus with its subsurface ocean, enigmatic Titan with its hazy atmosphere, and more.\n\n",
    },
    {
      id: 7,
      name: 'Uranus',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/d510/ffd8/3374e01fbc62b5561b1b54036bf4fbaa?Expires=1693180800&Signature=SWTiY3ung7S0AURFkZ0RQdyw4JrzVxLtu5CtbSE8wDWZGqkedmaR8jxRWRnhFlbfGU5oRds~ijP6qRVx1Y8UmJMCUwqjHplf7V~vD9PlyBl-YyGhHX6hQv01St6zxfv25O8hIvKPePWrPfd-05GyiJLQiJ2Ns8IqV~cHkV33DyGo0czi0HzoNKAz~xot3Nzyk7SCNpUipuDaBGQx6QzAmSdO-uWzJ2oZDRaKoXznFVe7nq-26DxHWTx2zY1e~cXrTSzzx8vD6Yi-xrRNhUlH-G--OX1u3N9TwuVtrhSZqTPCvJ3--yhGYehaWrRvmNgBq1b1MXYJ3KleeOh9OTP4CQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      cost: '$ 6700.00',
      rating: '3',
      temperature: '-224 °C',
      duration: '21 Days',
      details: "Uranus, the enigmatic ice giant, spins on its side, defying the typical orientation of planetary rotations.\n\n" +
      "Its pale blue hue comes from methane in its atmosphere." +
      "With a system of faint rings and a retinue of moons, Uranus adds an air of mystery to our understanding of planetary dynamics.\n\n",
    },
    {
      id: 8,
      name: 'Neptune',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/a690/c71e/91edd4ed35421940fd34234e231428f3?Expires=1693180800&Signature=PnA3eUDBjEZzcgjdCZdhDIC5r7~xONdo3e7efXwxhDeFTO7CE4vltU-iOoacsqzZy9KvXZ4gWaW0Sm2rj-G042y-tDuya1-lM2vXZUakCguroreBMPKhMHR3jcirY9w~6wHecR8MHdLfa71aktVeiuNFS6iyR52mXMWxHmoztr4C-X-2TMWLWzsMlz15UZ1bGdeZK-xtc31MTmIxatDbEuKonqlhfTLX4kIrSJfbZPJvVnoLB54tcC0k-UV3b3Xq8URwXKngb58jbwfsj4Cv~zBXTx-8ufE3Z~JL0JgCV385KN~bCf93LB1LVlWGo5eGp-iVNh92qG7Eq00abwhK-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      cost: '$ 8200.00',
      rating: '4.7',
      temperature: '-218 °C',
      duration: '30 Days',
      details: "Neptune, the distant ice giant, is a world of vibrant blues due to its methane-rich atmosphere.\n\n" +
      "Its Great Dark Spot and accompanying storms showcase the tumultuous nature of its dynamic atmosphere." +
      "Neptune's far-reaching winds and distinctive appearance paint a picture of a planet shaped by the elements.\n\n",
    },
  ];


  const [isKeyboardOpen, setKeyboardOpen] = useState(false);

  // Listen for keyboard events
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardOpen(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardOpen(false);
      }
    );

    // Clean up event listeners
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <BackgroundTemplate>
      <View style={styles.container}>
        <>
          <View style={styles.topPartContainer}>
            <View style={styles.topPart}>
              <View style={styles.appNameContainer}>
                <Image
                  source={require("../assets/images/appLogo.png")}
                  style={{ marginRight: 12, width: 22, height: 19 }}
                ></Image>
                <TextHeading value={"Aurora"}></TextHeading>
              </View>
              <View style={styles.searchBarContainer}>
                <SearchBar></SearchBar>
              </View>
       
              <View style={styles.commonTitleContainer}>
                <TextHeading
                  value={"Emergency Assistance"}
                  fontSize={26}
                  lineHeight={39}
                  fontWeight={600}
                  textAlign={"center"}
                ></TextHeading>
                <TouchableOpacity>
                  <TextBody
                    value={"See all"}
                    fontSize={14}
                    lineHeight={24}
                    fontWeight={600}
                    color={"white"}
                    textAlign={"center"}
                  ></TextBody>
                </TouchableOpacity>
              </View>
            
              <View style={styles.emergencyBarContainer}>
                <View
                  style={[styles.emergencyItemContainer, { marginRight: "4%" }]}
                >
                  <View style={styles.emergencyIcon}>
                    <IconEmergencyAssistance
                      source={require("../assets/images/emergencyIcons/emProtocol.png")}
                    />
                  </View>
                  <View style={styles.emergencyTitle}>
                    <TextBody
                      value={"Emergency\n" + "Protocols"}
                      lineHeight={15.4}
                      textAlign={"center"}
                      fontSize={14}
                    ></TextBody>
                  </View>
                </View>
                <View
                  style={[styles.emergencyItemContainer, { marginRight: "4%" }]}
                >
                  <View style={styles.emergencyIcon}>
                      <IconEmergencyAssistance
                      source={require("../assets/images/emergencyIcons/UniversalTranslator.png")}
                      onPress={handleUniversalTranslatorButton}
                      />
                  </View>
                  <View style={styles.emergencyTitle}>
                    <TextBody
                      value={"Universal\n" + "Translator"}
                      lineHeight={15.4}
                      textAlign={"center"}
                      fontSize={14}
                    ></TextBody>
                  </View>
                </View>
                <View
                  style={[styles.emergencyItemContainer, { marginRight: "4%" }]}
                >
                  <View style={styles.emergencyIcon}>
                    <IconEmergencyAssistance
                      source={require("../assets/images/emergencyIcons/DistressBeacon.png")}
                      onPress={openPopup}
                    />
                  </View>
                  <View style={styles.emergencyTitle}>
                    <TextBody
                      value={"Distress\n" + "Beacon"}
                      lineHeight={15.4}
                      textAlign={"center"}
                      fontSize={14}
                    ></TextBody>
                  </View>
                </View>
                <View style={styles.emergencyItemContainer}>
                  <View style={styles.emergencyIcon}>
                    <IconEmergencyAssistance
                      source={require("../assets/images/emergencyIcons/TechnicalSupport.png")}
                    />
                  </View>
                  <View style={styles.emergencyTitle}>
                    <TextBody
                      value={"Technical\n" + "Support"}
                      lineHeight={15.4}
                      textAlign={"center"}
                      fontSize={14}
                    ></TextBody>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* from slider onwards comes below */}
          {isKeyboardOpen ? (
            <View style={styles.secondPartContainer}></View>
          ) : (
            <>
              <View style={styles.secondPartContainer}>
                <ScrollView>
                  <View style={styles.titleOuterContainer}>
                    <View style={{paddingTop:15}}>
                      <View style={styles.commonTitleContainer}>
                        <TextHeading
                          value={"Popular Destinations"}
                          fontSize={26}
                          lineHeight={39}
                          fontWeight={600}
                          textAlign={"center"}
                        ></TextHeading>
                        <TouchableOpacity>
                          <TextBody
                            value={"See all"}
                            fontSize={14}
                            lineHeight={24}
                            fontWeight={600}
                            color={"white"}
                            textAlign={"center"}
                          ></TextBody>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <View style={styles.sliderContainer}>
                    <PopularPlanetSlider data={allPlanets} />
                  </View>
                  <View style={styles.titleOuterContainer}>
                    <View style={styles.commonTitleContainer}>
                      <TextHeading
                        value={"Top Adventure Trips"}
                        fontSize={26}
                        lineHeight={39}
                        fontWeight={600}
                        textAlign={"center"}
                      ></TextHeading>
                      <TouchableOpacity>
                        <TextBody
                          value={"See all"}
                          fontSize={14}
                          lineHeight={24}
                          fontWeight={600}
                          color={"white"}
                          textAlign={"center"}
                        ></TextBody>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.listContainer}>
                    <FlatList
                      data={allPlanets}
                      keyExtractor={(item) => item.id.toString()}
                      renderItem={({ item }) => (
                        <CardPopularDestinationLarge data={item} />
                      )}
                      style={styles.cardList}
                    />
                  </View>
                </ScrollView>
              </View>
            </>
          )}
        </>
        <DistressBeaconPopup visible={isPopupVisible} onClose={closePopup} />
      </View>
    </BackgroundTemplate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 45,
  },
  topPartContainer: {
    marginHorizontal: 20,
  },
  topPart: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 32,
    height: "42%",
  },
  secondPartContainer: {
    height: "58%",
  },
  appNameContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 15,
    alignItems: "center",
  },
  searchBarContainer: {
    marginBottom: 25,
  },
  commonTitleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlignVertical: "center",
    marginBottom: 15,
    alignItems: "center",
  },
  emergencyBarContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  emergencyItemContainer: {
    display: "flex",
    flexDirection: "column",
  },
  emergencyTitle: {
    alignItems: "center",
    marginTop: 5,
  },
  titleOuterContainer: {
    marginHorizontal: 32,
  },
  sliderContainer: {
    paddingLeft: 32,
    marginBottom: 28,
    minHeight: 296,
    maxHeight: 296,
  },
  listContainer: {
    marginHorizontal: 16,
    marginTop: -15,
    paddingBottom: 40,
  },
  cardList: {
    padding: 15,
  },
});
