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
      imageSrc: 'https://s3-alpha-sig.figma.com/img/41f6/6690/a676009d8b4985f74650d8491df37085?Expires=1695600000&Signature=foQhimtygDYG283zm0hF8f1qF8X4xurVwMxnruIouBqCMd2r5EnI3yOAZFHkkVlPH6kwVgsgHvobsp4B2ChgYhJgA1-cj99sDzoCOGOx~1FEY1pCzrN5fkOHsrhkbSvFfHgPpW3UJf-Lchhd87FZ9zuMrw4OMz6nkVVIN7x37PuwF1Cer8VRVlUwckgNlFdgVtT2qF8ZC-7UtlpgR8Ex02PJbiRXSbONO9V4Re~5yz8gzW1BTZmLSjI~qgYiqSrWp9DUU3dfuv8dJtfxoTFrvfYvz7~dRT90tmxVX~DXVBLu9NCXqVcXuwGLVdiJJUqqJZCSVfoQ8wXt4H1aBUxaRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imageSrc: 'https://s3-alpha-sig.figma.com/img/de51/b8fa/04339ff0abc9268a3f4df02a1887e193?Expires=1695600000&Signature=l3161nPnhDPLMvL7ylekG-09SwSc8GWQVAV3rMbPC6hZOtiYK4GMyNhBd65dbnoy7N84xhQZm8Gu0WiM35dzms72tRu3dQuNHze7mnojh6bMjM2Pyc~JniWT3cTrTQY2lLTItEUUcCbxJiFECLiX37~lSJGFiL1aJg6jix1hl3AYOBlGOs7YAvnNvpeabVGLZjKZDc4UiYfLoShceMNTRU3xClIeXnRckTjopEguAtqQw7OO0oBB~uVbXhKrCzzkDEkw1JZqGR9QmoNYccV3oWIslkxVDfmXiwRxYQa7oahMrds2-yu9I7QuVzmZV1Ih0noi7ce0g~y9xMYFRZDktg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imageSrc: 'https://s3-alpha-sig.figma.com/img/3260/6ea4/cb66b8d5c3420c01336925eef080adc0?Expires=1695600000&Signature=V5x63JEp69CWeO-7sFxVH0PtnxflZYLvmGCTdlN-ZXV-UxzhvW4lD7elfcHKuHBYKmcoUbHEYVfGrKxWKzE85Vz3BW7OLEn-o5qRGBiX9WYkeUotiVEcdfvjgiZygSFPw0qTXtlko0BssOWpsKGqPvQ4GwYn-OZSTTa69RnPkiCDLp44Tz8s8UUEa2XBKUnmADZWxPXFiJUGxPfv7Qhcw29iMJl8Buz7ZtYrX~6CeHMG0CW6sgvxvNOkKkXvv0Ha4NImHzJrMBj9eui57kHX01QWa26irZwg4TBRa~xMhHeZObLoLbGWZn~uWMJvhYcfrae1Rd12QgMS1qkoUniAag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imageSrc: 'https://s3-alpha-sig.figma.com/img/e37b/f7a0/61839add0eaa454eadb0bc28afde8272?Expires=1695600000&Signature=V9Sy9W7aDAreYFkIUXO~zPe0OnkmSXQRyqs5av9FLDZy62Fm1ep0CgsVG~vY3QzNYHRcB91JDG0WMIKs75n-R4qcSHDyxKJ3WRG2xa~KbmVynv53YTvz6Hq9UHrKSMmmIjqoC30rXK9u-OQhZXn8uxRMo7h6ts8O71AciAKRF~dtl0iwdaU~Drz0kPSOE5XH4G30lv93qCou4tI1w7ENgcTyXs~BW5dSUvxQfveaj7eeiszhTxa6dllrhOsYXSrZyjWWaacuGSGE42NIIPwgur6j5z40ioIQoGF78ORkD028TY38QE~XLT0bMmFnnx4ZpAfSZcQCc5i7-3WV4-5xeg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imageSrc: 'https://s3-alpha-sig.figma.com/img/be55/a4f7/8a82361ca635b25abfcafdfbd660d926?Expires=1695600000&Signature=nkrcqTuR6wJdtCatwzIeX1N8Svi2aXkyW91R46je~jiaqRhBrZGbMZsdYVAV08KvqAUf81vGvLrHV~h4yHpKqLjYKGSmg~pex8cOinCRBYnejYt9RalyAoeqaWGYez3Xxte1IWeEUqIEbZBmKJcC3iMlEMo-WfAE0aYyH-uAkulLBL0ZVkM5Y45zK3widJ7TVsPnE0w-VOn1JW3stKmcefC4YMYfYzSd6F617y9Wgz1cP5-A-eK43ztYpMff8~cbSNHeXiConmGBZWTlDX-a7WenkLnR3pFxzgYEfzWNoXSQlw22zyFMNW5gnb4ryZM2LumvXwbfyLMbE7~P9nrAfQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imageSrc: 'https://s3-alpha-sig.figma.com/img/95d1/5a3f/83ebd015165ed7e61b530f0e58b395b5?Expires=1695600000&Signature=FxwWdyxMkbKRto6~AYxRFOpBQWSyb1coLSNF9fixfrVa8iEDdyOjG6tegmLsrQvu9CL-0OLa79gWPLINOfzOfITnV808bmJHkYN28h7YZRN~mb~iXTSNtn6Ok~uUOadoaTlXNdAxpbRbjTj0sTp8ESb3WK3KvhkT5FWCfbP1x9tQ1PzV3ue~br1mY9e0AxQaPaTTT-EzuJAAUmuOJvpyw~0t1HTQj0p5jJQcvqXGgyaR63Z3IU20eAYtPIi823AZ~Es-aEMGY0L3lKc04Ogd-13Nm7N~IP0ggAJLwcMrGi1x8BPQZucoa6eie1PxibbciyNCsnwNscItTkSWnG2u8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imageSrc: 'https://s3-alpha-sig.figma.com/img/be55/a4f7/8a82361ca635b25abfcafdfbd660d926?Expires=1695600000&Signature=nkrcqTuR6wJdtCatwzIeX1N8Svi2aXkyW91R46je~jiaqRhBrZGbMZsdYVAV08KvqAUf81vGvLrHV~h4yHpKqLjYKGSmg~pex8cOinCRBYnejYt9RalyAoeqaWGYez3Xxte1IWeEUqIEbZBmKJcC3iMlEMo-WfAE0aYyH-uAkulLBL0ZVkM5Y45zK3widJ7TVsPnE0w-VOn1JW3stKmcefC4YMYfYzSd6F617y9Wgz1cP5-A-eK43ztYpMff8~cbSNHeXiConmGBZWTlDX-a7WenkLnR3pFxzgYEfzWNoXSQlw22zyFMNW5gnb4ryZM2LumvXwbfyLMbE7~P9nrAfQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      imageSrc: 'https://s3-alpha-sig.figma.com/img/a690/c71e/91edd4ed35421940fd34234e231428f3?Expires=1695600000&Signature=nznxjCmfSViN30xQB-YEtNUre2dgm9Hkp4aAx0bBEEEk3VNR-WZRlRuGab3HNe6zEyO5D6M0dYvxH5kmrTjmGwqg2CoMoeVbV6SroWwmHQWu7w8Gli8O3fvq36LLTWK6Z6O955hNnhG~qFujUsQ54m09YBaKcnSUspUqlMQAfFdmaVWfQ9eaq1ktHlrPl-3qgtciTtAaenKddbOsGuOjP6fcibc0RdA3~y6y6ExBnGjcY09kWixrjzh03B7SQ3Aaz7GxnEwyIKXXDeR5~7GHOX9hEhNriVnHGqljt6y-GesMMhJ-Pt58NrPaZB0u0QO1xzcnJBxklUZVXN0AKmFnsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
