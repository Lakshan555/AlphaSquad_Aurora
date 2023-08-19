import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
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
      cost: '$4200',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/41f6/6690/a676009d8b4985f74650d8491df37085?Expires=1693180800&Signature=D26gk0rg6EFpZTcmt86nDODb46dBGnNbuNOatV3q8ENUDj3w9~zInWRAvwMH5GHE8fVVHvlzlOQB~lvMMSOKsphkIaDPUHPWU1pIJw-C1nnaP1JTLF7BAu2CKNdWPnq3OnkiackP318TYknkj9HpZl~EiG04EoTPLbNxFymbo2CO2zkLMG2TIh~y9LHebbStCZVPNTIdGN4VcyyTfNsJhI4gMBlppirN4vSRZEWMZik23OGbE6vnap1dyzlFDR5ZMaJzaUpgzjTmXWimkk0dWgYU3p001ovO2c9on-FY9SJbkl0DdLJN6U3j6HxDgzkxP~88hOf9UCB5lY-g-OkvZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      id: 2,
      name: 'Mercury',
      cost: '$4200',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/de51/b8fa/04339ff0abc9268a3f4df02a1887e193?Expires=1693180800&Signature=a-EN0XQmZbYGJLLLoxZxWJkUCruyUZoWQi3EjCSvek7UUb8b6LQRNy-g5MK~3XalDL6ZSfuKU~SU4~f-q1ZBcGjtPozveynfGBW9o1wjBVW49oLgxpJ0hXCN3Clrj5mNztYJxqU6VSbrmFE4TgQRRP2C3rnKH9PDFMQe9T6yIYFYwt-qrCezWPGeCO7zT7-N4yLwdPZ8b9wiO7rZ0DTtYhAqlR3HM3yZZYs07P3-PJv6Mre-sLQNq04a5yONSqGjIx~P~MG7Zmj9Bxgk9FsoT4JowmfR99B1Mo2oC0xBYSgDL8fJS-32A80il~NsLDPNWsQmth3OAE2L4I8V9nQDEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      id: 3,
      name: 'Jupiter',
      cost: '$4200',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/41f6/6690/a676009d8b4985f74650d8491df37085?Expires=1693180800&Signature=D26gk0rg6EFpZTcmt86nDODb46dBGnNbuNOatV3q8ENUDj3w9~zInWRAvwMH5GHE8fVVHvlzlOQB~lvMMSOKsphkIaDPUHPWU1pIJw-C1nnaP1JTLF7BAu2CKNdWPnq3OnkiackP318TYknkj9HpZl~EiG04EoTPLbNxFymbo2CO2zkLMG2TIh~y9LHebbStCZVPNTIdGN4VcyyTfNsJhI4gMBlppirN4vSRZEWMZik23OGbE6vnap1dyzlFDR5ZMaJzaUpgzjTmXWimkk0dWgYU3p001ovO2c9on-FY9SJbkl0DdLJN6U3j6HxDgzkxP~88hOf9UCB5lY-g-OkvZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      id: 4,
      name: 'Venus',
      cost: '$4200',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/41f6/6690/a676009d8b4985f74650d8491df37085?Expires=1693180800&Signature=D26gk0rg6EFpZTcmt86nDODb46dBGnNbuNOatV3q8ENUDj3w9~zInWRAvwMH5GHE8fVVHvlzlOQB~lvMMSOKsphkIaDPUHPWU1pIJw-C1nnaP1JTLF7BAu2CKNdWPnq3OnkiackP318TYknkj9HpZl~EiG04EoTPLbNxFymbo2CO2zkLMG2TIh~y9LHebbStCZVPNTIdGN4VcyyTfNsJhI4gMBlppirN4vSRZEWMZik23OGbE6vnap1dyzlFDR5ZMaJzaUpgzjTmXWimkk0dWgYU3p001ovO2c9on-FY9SJbkl0DdLJN6U3j6HxDgzkxP~88hOf9UCB5lY-g-OkvZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
  ];
  
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
            <View style={styles.secondPartContainer}>
            <ScrollView>
                <View style={styles.titleOuterContainer}>
                  <View style={styles.commonTitleContainer}>
                            <TextHeading value={'Popular Destinations'} fontSize={26} lineHeight={39} fontWeight={600} textAlign={'center'}></TextHeading>
                            <TouchableOpacity><TextBody value={'See all'} fontSize={14} lineHeight={24} fontWeight={600} color={'blue'} textAlign={'center'}></TextBody></TouchableOpacity>
                  </View>
                </View>
                <View style={styles.sliderContainer}>
                  <PopularPlanetSlider data={allPlanets} />
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
                          title={item.name}
                          cost={item.cost}
                          imageSrc={item.imageSrc}
                        />
                      )}
                      style={styles.cardList}
                    />
                </View>
              </ScrollView>
            </View>
            
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
    marginTop: 2,
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
    paddingBottom: 30,
  },
  cardList: {
    padding: 15
  }
});
