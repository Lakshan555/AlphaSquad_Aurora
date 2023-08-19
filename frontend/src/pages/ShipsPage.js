import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import BackgroundTemplate from "../components/templates/BackgroundTemplate";
import PopularPlanetSlider from '../components/organisms/ImageSliders/PopularPlanetSlider';
import SearchBar from '../components/molecules/SearchBar';
import TextBody from '../components/atoms/texts/TextBody'
import IconEmergencyAssistance from '../components/atoms/icons/IconEmergencyAssistance';
import TextHeading from '../components/atoms/texts/TextHeading';
import CardPopularDestinationLarge from '../components/molecules/ItemCards/CardPopularDestinationLarge';
import PopularDestinationSlider from '../components/organisms/ImageSliders/PopularDestinationSlider';
import CardShip from '../components/molecules/ItemCards/CardShip';

export default function ShipsPage() {
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
  
  const allShips = [
    {
      id: 1,
      name: 'Community Ship',
      shipTypes: ['type1', 'type2', 'type3'],
      imageSrc: 'https://s3-alpha-sig.figma.com/img/0716/8ac3/e5c72b26a1aff62254387cab45180be6?Expires=1693180800&Signature=KVXrhrCi9z-QOE0wRT17w6X10u3oB5Zf7AzMIKJ9EtO4GSWYOgJznE8ouOmlHzbi3wXFoK3SUJwOWAp8pNb7yEatqVr8CdVHr4H~FFUtxGLDmIRR2IF-aYdStJb1JBIjQS5Otx5YtrHe2NG~eblCTbiTk9lukCZqAP7zO6Pa~61luCRHBJv~pQu3XHqZIuxOmHT-n9TIEh~-iXcTIO7p~Yo5V62Bva~5BH2QUCaAEvJ0M-NNEnzv9Eol9U-rJncQx~hW4MkDNHwsoPmOUWVeUiBJNAQBdLYF0Tb~xzRIJAMKr8kcUYkPiHofTSQMlZjPuAnZqvvy4~rYE8Rkep0wNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      id: 2,
      name: 'Federation',
      shipTypes: ['type1', 'type2', 'type3'],
      imageSrc: 'https://s3-alpha-sig.figma.com/img/fb84/34eb/c05fbb8d6ab700ced1cf96e967ac91ce?Expires=1693180800&Signature=Z9-B8GRA3-hQt0DbUvycgRdfrIdIElWOVSw4GUsVkbAlV3LpPTFZ4HwFnpUom0TRBtxVSTljy46Uzc4P05UAFRLQY3ikaxrF70txNQyw2qJlciRjHm5HjOB8breZoj4EDKlAH1FSRzRrGZRyqIOJfA0UBUtfWMy8VmAV4gGoq7pYaswhaubKwmuboAFrBtvKn8u5zSRrb0eUWyWUCymCodseT2pyeprWa5IvADjCyIzeDPxvhckMnkoTZi0GK0tQeB~q5kZtEEt8exiGjckIB6azFbgrT2cOX31z3QU8z7sXLbJlTR-ha-1WFpnjrIQiX0YZlryCwPt4q4P99UWmiA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
        id: 3,
        name: 'Community Ship',
        shipTypes: ['type1', 'type2', 'type3'],
        imageSrc: 'https://s3-alpha-sig.figma.com/img/0716/8ac3/e5c72b26a1aff62254387cab45180be6?Expires=1693180800&Signature=KVXrhrCi9z-QOE0wRT17w6X10u3oB5Zf7AzMIKJ9EtO4GSWYOgJznE8ouOmlHzbi3wXFoK3SUJwOWAp8pNb7yEatqVr8CdVHr4H~FFUtxGLDmIRR2IF-aYdStJb1JBIjQS5Otx5YtrHe2NG~eblCTbiTk9lukCZqAP7zO6Pa~61luCRHBJv~pQu3XHqZIuxOmHT-n9TIEh~-iXcTIO7p~Yo5V62Bva~5BH2QUCaAEvJ0M-NNEnzv9Eol9U-rJncQx~hW4MkDNHwsoPmOUWVeUiBJNAQBdLYF0Tb~xzRIJAMKr8kcUYkPiHofTSQMlZjPuAnZqvvy4~rYE8Rkep0wNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      },
      {
        id: 4,
        name: 'Federation',
        shipTypes: ['type1', 'type2', 'type3'],
        imageSrc: 'https://s3-alpha-sig.figma.com/img/fb84/34eb/c05fbb8d6ab700ced1cf96e967ac91ce?Expires=1693180800&Signature=Z9-B8GRA3-hQt0DbUvycgRdfrIdIElWOVSw4GUsVkbAlV3LpPTFZ4HwFnpUom0TRBtxVSTljy46Uzc4P05UAFRLQY3ikaxrF70txNQyw2qJlciRjHm5HjOB8breZoj4EDKlAH1FSRzRrGZRyqIOJfA0UBUtfWMy8VmAV4gGoq7pYaswhaubKwmuboAFrBtvKn8u5zSRrb0eUWyWUCymCodseT2pyeprWa5IvADjCyIzeDPxvhckMnkoTZi0GK0tQeB~q5kZtEEt8exiGjckIB6azFbgrT2cOX31z3QU8z7sXLbJlTR-ha-1WFpnjrIQiX0YZlryCwPt4q4P99UWmiA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
                </View> 
            </View>
            {/* from list onwards comes below */}
            <View style={styles.secondPartContainer}>
            <ScrollView>
                <View style={styles.listContainer}>
                  <FlatList
                      data={allShips}
                      keyExtractor={(item) => item.id.toString()}
                      renderItem={({ item }) => (
                        <CardShip
                          name={item.name}
                          shipTypes={item.shipTypes}
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
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingVertical: 45,
  },
  topPartContainer: {
    //   marginHorizontal: 20,
      display: 'flex',
      flexDirection: 'column',
      height: '18%',
  },
  topPart: {
    // paddingHorizontal: 22,      
  },
  secondPartContainer: {
      height: '82%',
    //   maxWidth: '80%'
  },
  appNameContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 15,
    alignItems: 'center'
  },
  searchBarContainer: {
      marginBottom: 25,
  },
  commonTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlignVertical: 'center',
    marginBottom: 15,
    alignItems: 'center'
  },
  titleOuterContainer: {
    // marginHorizontal: 32,
  },
  listContainer: {
    // marginHorizontal: 16,
    // marginTop: -15,
      paddingBottom: 30,
  },
  cardList: {
    // padding: 15,
      paddingBottom: 20
  }
});
