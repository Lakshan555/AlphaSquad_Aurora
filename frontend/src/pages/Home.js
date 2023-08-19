import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList, Keyboard } from 'react-native';
import BackgroundTemplate from "../components/templates/BackgroundTemplate";
import PopularPlanetSlider from '../components/organisms/ImageSliders/PopularPlanetSlider';
import SearchBar from '../components/molecules/SearchBar';
import TextBody from '../components/atoms/texts/TextBody'
import IconEmergencyAssistance from '../components/atoms/icons/IconEmergencyAssistance';
import TextHeading from '../components/atoms/texts/TextHeading';
import CardPopularDestinationLarge from '../components/molecules/ItemCards/CardPopularDestinationLarge';

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
  
  const allPlanets = [
    {
      id: 1,
      name: 'Mars',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/41f6/6690/a676009d8b4985f74650d8491df37085?Expires=1693180800&Signature=D26gk0rg6EFpZTcmt86nDODb46dBGnNbuNOatV3q8ENUDj3w9~zInWRAvwMH5GHE8fVVHvlzlOQB~lvMMSOKsphkIaDPUHPWU1pIJw-C1nnaP1JTLF7BAu2CKNdWPnq3OnkiackP318TYknkj9HpZl~EiG04EoTPLbNxFymbo2CO2zkLMG2TIh~y9LHebbStCZVPNTIdGN4VcyyTfNsJhI4gMBlppirN4vSRZEWMZik23OGbE6vnap1dyzlFDR5ZMaJzaUpgzjTmXWimkk0dWgYU3p001ovO2c9on-FY9SJbkl0DdLJN6U3j6HxDgzkxP~88hOf9UCB5lY-g-OkvZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      cost: '$ 4200.00',
      rating: '4.5',
      temperature: '38 C',
      duration: '8 Days',
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
      rating: '5',
      temperature: '38 C',
      duration: '8 Days',
      details: "Mars is the fourth planet from the sun and has a distinct rusty red appearance and two unusual moons.\n\n" +
      "The Red Planet is a cold, desert world within our solar system. It has a very thin atmosphere, but the dusty, lifeless (as far as we know it) planet is far from dull." +
      " Phenomenal dust storms can grow so large they engulf the entire planet, temperatures can get so cold that carbon dioxide in the atmosphere condenses directly into snow or frost, and marsquakes — a Mars version of an earthquake — regularly shake things up.\n\n" +
      "Therefore, it is no surprise that this little red rock continues to intrigue scientists and is one of the most explored bodies in the solar system, according to NASA Science." +
        "The Red Planet is a cold, desert world within our solar system. It has a very thin atmosphere, but the dusty, lifeless (as far as we know it) planet is far from dull.\n\n",
    },
    {
      id: 3,
      name: 'Jupiter',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/be55/a4f7/8a82361ca635b25abfcafdfbd660d926?Expires=1693180800&Signature=qpbAmUB9UqyuXdYrEjwjxWrNyv0Ev2DMgNuBlsIvjTNnoapKlZa9sHvW7ocMa1SShgjnAVSoNkm54LUtAZKDBMR9CdzZ1S3mscxjzNzGwo3TNuOAttp53CtHSr~wQhMsGRrqo70WK~mcAabnnHzA0H20BpXZVgRf0OAlA0GUS81qdHQpNqG3JPmsWXbUGARfmowHwvdUv0VW-MwD8ZgAP0JGlMoYL1kugJIvu1EzVAM3I1O~BW~LtYKkdZB9pYy-XIphDUGSkLSJZz7Rz5dCpjwbiV4~q~RBgVi7wu6ZBPZP2B3cC5qgFL~fU70X24jhrhlfup7K57~UIcb6O5bgOw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      cost: '$ 4200.00',
      rating: '4.7',
      temperature: '38 C',
      duration: '8 Days',
      details: "Mars is the fourth planet from the sun and has a distinct rusty red appearance and two unusual moons.\n\n" +
      "The Red Planet is a cold, desert world within our solar system. It has a very thin atmosphere, but the dusty, lifeless (as far as we know it) planet is far from dull." +
      " Phenomenal dust storms can grow so large they engulf the entire planet, temperatures can get so cold that carbon dioxide in the atmosphere condenses directly into snow or frost, and marsquakes — a Mars version of an earthquake — regularly shake things up.\n\n" +
      "Therefore, it is no surprise that this little red rock continues to intrigue scientists and is one of the most explored bodies in the solar system, according to NASA Science." +
        "The Red Planet is a cold, desert world within our solar system. It has a very thin atmosphere, but the dusty, lifeless (as far as we know it) planet is far from dull.\n\n",
    },
    {
      id: 4,
      name: 'Venus',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/3260/6ea4/cb66b8d5c3420c01336925eef080adc0?Expires=1693180800&Signature=aJvqsAA4Raav40xYpR9TX~witbuBD2w7ppGL6epXmpuqG8KunvNTudP4EKZTFo9r34NcQTvv~ZVnXxu9Pyzw114A4WlRrEWFYVzpELM8m7vIXOIpioYiXSNcU1zZfOqNnmbc27tJQeK86UnXIubuzgxN~eaodXLWz~h6KnRHa4sal9g7oXeRV4rYC8N~H77UkzXzEsb6OoBY5sAOHntjtSY47IfNj1U4mt7fInJUrpdyDtlXysd0tNrsRiH9AHqsO6Nr9mXYYf~93l8sNPiMhiklqBJsqK8us4BopgUB4AleBcssXWeLi3TKWLZy3NB2ZzFYXk7-Yz6iF0Ki8cjgzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      cost: '$ 4200.00',
      rating: '3',
      temperature: '38 C',
      duration: '8 Days',
      details: "Mars is the fourth planet from the sun and has a distinct rusty red appearance and two unusual moons.\n\n" +
      "The Red Planet is a cold, desert world within our solar system. It has a very thin atmosphere, but the dusty, lifeless (as far as we know it) planet is far from dull." +
      " Phenomenal dust storms can grow so large they engulf the entire planet, temperatures can get so cold that carbon dioxide in the atmosphere condenses directly into snow or frost, and marsquakes — a Mars version of an earthquake — regularly shake things up.\n\n" +
      "Therefore, it is no surprise that this little red rock continues to intrigue scientists and is one of the most explored bodies in the solar system, according to NASA Science." +
        "The Red Planet is a cold, desert world within our solar system. It has a very thin atmosphere, but the dusty, lifeless (as far as we know it) planet is far from dull.\n\n",
    },
  ];

  const [isKeyboardOpen, setKeyboardOpen] = useState(false);

  // Listen for keyboard events
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardOpen(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardOpen(false);
    });

    // Clean up event listeners
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <BackgroundTemplate>
        <View style={styles.container}>
            <View style={styles.topPartContainer}>
            <View style={styles.topPart}>
              <View style={styles.appNameContainer}>
                <Image source={require('../assets/images/appLogo.png')} style={{marginRight: 12, width: 22, height: 19}}></Image>
                <TextHeading value={'Aurora'}></TextHeading>
              </View>
              <View style={styles.searchBarContainer}>
                <SearchBar></SearchBar>
              </View>
              <View style={styles.commonTitleContainer}>
                <TextHeading value={'Emergency Assistance'} fontSize={26} lineHeight={39} fontWeight={600} textAlign={'center'}></TextHeading>
                <TouchableOpacity><TextBody value={'See all'} fontSize={14} lineHeight={24} fontWeight={600} color={'blue'} textAlign={'center'}></TextBody></TouchableOpacity>
              </View>
                <View style={styles.emergencyBarContainer}>
                <View style={[styles.emergencyItemContainer, {marginRight:  '4%'}]}>
                  <View style={styles.emergencyIcon}>
                      <IconEmergencyAssistance
                        source={require("../assets/images/emergencyIcons/emProtocol.png")}
                      />
                  </View>
                  <View style={styles.emergencyTitle}>
                    <TextBody value={"Emergency\n"+"Protocols"} lineHeight={15.4} textAlign={'center'} fontSize={14}></TextBody>
                  </View>
              </View>
              <View style={[styles.emergencyItemContainer, {marginRight: '4%'}]}>
                  <View style={styles.emergencyIcon}>
                      <IconEmergencyAssistance
                        source={require("../assets/images/emergencyIcons/UniversalTranslator.png")}
                      />
                  </View>
                  <View style={styles.emergencyTitle}>
                    <TextBody value={"Universal\n"+"Translator"} lineHeight={15.4} textAlign={'center'} fontSize={14}></TextBody>
                  </View>
              </View>
              <View style={[styles.emergencyItemContainer, {marginRight:  '4%'}]}>
                  <View style={styles.emergencyIcon}>
                      <IconEmergencyAssistance
                        source={require("../assets/images/emergencyIcons/DistressBeacon.png")}
                      />
                  </View>
                  <View style={styles.emergencyTitle}>
                    <TextBody value={"Distress\n"+"Beacon"} lineHeight={15.4} textAlign={'center'} fontSize={14}></TextBody>
                  </View>
              </View>
              <View style={styles.emergencyItemContainer}>
                  <View style={styles.emergencyIcon}>
                      <IconEmergencyAssistance
                        source={require("../assets/images/emergencyIcons/TechnicalSupport.png")}
                      />
                  </View>
                  <View style={styles.emergencyTitle}>
                    <TextBody value={"Technical\n"+"Support"} lineHeight={15.4} textAlign={'center'} fontSize={14}></TextBody>
                  </View>
                </View>
              </View>
            </View> 
            </View>
            {/* from slider onwards comes below */}
        {isKeyboardOpen ? <View style={styles.secondPartContainer}></View> : 
          <>
          <View style={styles.secondPartContainer}>
            <ScrollView>
                <View style={styles.titleOuterContainer}>
                  <View style={styles.commonTitleContainer}>
                            <TextHeading value={'Popular Destinations'} fontSize={26} lineHeight={39} fontWeight={600} textAlign={'center'}></TextHeading>
                            <TouchableOpacity><TextBody value={'See all'} fontSize={14} lineHeight={24} fontWeight={600} color={'blue'} textAlign={'center'}></TextBody></TouchableOpacity>
                  </View>
                </View>
                <View style={styles.sliderContainer}>
                  <PopularPlanetSlider data={allPlanets}/>
                </View>
                <View style={styles.titleOuterContainer}>
                  <View style={styles.commonTitleContainer}>
                            <TextHeading value={'Top Adventure Trips'} fontSize={26} lineHeight={39} fontWeight={600} textAlign={'center'}></TextHeading>
                            <TouchableOpacity><TextBody value={'See all'} fontSize={14} lineHeight={24} fontWeight={600} color={'blue'} textAlign={'center'}></TextBody></TouchableOpacity>
                  </View>
                </View>
                <View style={styles.listContainer}>
                  <FlatList
                      data={allPlanets}
                      keyExtractor={(item) => item.id.toString()}
                      renderItem={({ item }) => (
                        <CardPopularDestinationLarge
                          data={item}
                        />
                      )}
                      style={styles.cardList}
                    />
                </View>
              </ScrollView>
            </View>
          </>}
            
          </View>
    </BackgroundTemplate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 45,
  },
  topPartContainer: {
    marginHorizontal: 20,
  },
  topPart: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 32,
    height: '42%'
  },
  secondPartContainer: {
    height: '58%'
  },
  appNameContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 15,
    alignItems: 'center'
  },
  searchBarContainer: {
    marginBottom: 25
  },
  commonTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlignVertical: 'center',
    marginBottom: 15,
    alignItems: 'center'
  },
  emergencyBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  emergencyItemContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  emergencyTitle: {
    alignItems: 'center',
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
    padding: 15
  }
});
