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

export default function DestinationsPage() {
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
      name: 'Red Sand Bazarr',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/0e08/e89c/f2da073b321bacea54cedcaf26535046?Expires=1693180800&Signature=bWBE2a03U4y-F-PR~9yJ4sGi4rlINrg0CZpvXZmCNM~VdiHo6zvXoNkjqtX~dPahI5MAmAVqD4s9VpoE3XOQ2Z0DrHzTwYJBx3b75gN-IjGk-eNj-07Aut4SN5D-PUNgYHnUYXKOJ8iJuhw578kx0PLtN7WmiNmGOnqmU3ZB~Mi61QFhsxt4zabkVTByTC0M7-eBCqr-30gRshuu1IXwRPLOi7cJnNf-mGNyvC-lTJj5NMBGqdsNbNTKCAM2Q1M1Mw8ViBlRbkp0Be4xSKAQVngG3HQxbHZ2~hN3GiSVUe6xZxpSs8TfEis0rwxkvPwj1yqNOLDcvnfWn9D-ARasyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      id: 2,
      name: 'Elysium Dome Resort',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/771d/3f75/057e83e1dad4192e4e715eed9a07d951?Expires=1693180800&Signature=i~ede7EPCDefngoJwxuJgSuruw0fBucEbI-6ugoOtjC06DHJQyzzh0jrVITwWYyEouKcVI1ACsMwtfLu-woJwke5WmUCjraxg7FsAS~KOhPpn4IQnP9g86TJrxJ3nVweq~ZcWf8AwOl6GFeTPMNBEc4UDJkIrDQI9BXR9~BjVq53rOtIfaPTk1uokMyTvHJWKJ6e6VuYq666SoCLZAgKWLTQdsHtZ8cLYs44pbKt6r~zZnA8hJMzP8-4gsQRWYSvvRysff1VCuWaMZcXX6TQorPo8MBva7ARXaDwtLP~gHohQewYYZLTG1zbps2cQLL3RU-TV0tuD75d-uhxQvAW0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
        id: 3,
        name: 'dfd fdf',
        imageSrc: 'https://s3-alpha-sig.figma.com/img/0e08/e89c/f2da073b321bacea54cedcaf26535046?Expires=1693180800&Signature=bWBE2a03U4y-F-PR~9yJ4sGi4rlINrg0CZpvXZmCNM~VdiHo6zvXoNkjqtX~dPahI5MAmAVqD4s9VpoE3XOQ2Z0DrHzTwYJBx3b75gN-IjGk-eNj-07Aut4SN5D-PUNgYHnUYXKOJ8iJuhw578kx0PLtN7WmiNmGOnqmU3ZB~Mi61QFhsxt4zabkVTByTC0M7-eBCqr-30gRshuu1IXwRPLOi7cJnNf-mGNyvC-lTJj5NMBGqdsNbNTKCAM2Q1M1Mw8ViBlRbkp0Be4xSKAQVngG3HQxbHZ2~hN3GiSVUe6xZxpSs8TfEis0rwxkvPwj1yqNOLDcvnfWn9D-ARasyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      },
      {
        id: 4,
        name: 'dfd fd f',
        imageSrc: 'https://s3-alpha-sig.figma.com/img/771d/3f75/057e83e1dad4192e4e715eed9a07d951?Expires=1693180800&Signature=i~ede7EPCDefngoJwxuJgSuruw0fBucEbI-6ugoOtjC06DHJQyzzh0jrVITwWYyEouKcVI1ACsMwtfLu-woJwke5WmUCjraxg7FsAS~KOhPpn4IQnP9g86TJrxJ3nVweq~ZcWf8AwOl6GFeTPMNBEc4UDJkIrDQI9BXR9~BjVq53rOtIfaPTk1uokMyTvHJWKJ6e6VuYq666SoCLZAgKWLTQdsHtZ8cLYs44pbKt6r~zZnA8hJMzP8-4gsQRWYSvvRysff1VCuWaMZcXX6TQorPo8MBva7ARXaDwtLP~gHohQewYYZLTG1zbps2cQLL3RU-TV0tuD75d-uhxQvAW0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
                <View style={styles.titleOuterContainer}>
                  <View style={styles.commonTitleContainer}>
                            <TextHeading value={'Popular Destinations'} fontSize={26} lineHeight={39} fontWeight={600} textAlign={'center'}></TextHeading>
                            <TouchableOpacity><TextBody value={'See all'} fontSize={14} lineHeight={24} fontWeight={600} color={'blue'} textAlign={'center'}></TextBody></TouchableOpacity>
                  </View>
                </View>
                  </View> 
                  <View style={styles.sliderContainer}>
                  <PopularDestinationSlider data={allPlanets} />
                </View>
            </View>
            {/* from list onwards comes below */}
            <View style={styles.secondPartContainer}>
            <ScrollView>
                {/* <View style={styles.titleOuterContainer}>
                  <View style={styles.commonTitleContainer}>
                            <TextHeading value={'Top Adventure Trips'} fontSize={26} lineHeight={39} fontWeight={600} textAlign={'center'}></TextHeading>
                            <TouchableOpacity><TextBody value={'See all'} fontSize={14} lineHeight={24} fontWeight={600} color={'blue'} textAlign={'center'}></TextBody></TouchableOpacity>
                  </View>
                </View> */}
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
    // marginHorizontal: 20,
    display: 'flex',
      flexDirection: 'column',
      height: '53%'
    
  },
  topPart: {
    paddingHorizontal: 32,
  },
  secondPartContainer: {
    height: '47%'
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
  titleOuterContainer: {
    // marginHorizontal: 32,
  },
  sliderContainer: {
    paddingLeft: 32,
    // paddingLeft: 22,
    marginBottom: 28,
    minHeight: 296,
    maxHeight: 296,
  },
  listContainer: {
    marginHorizontal: '5%', // double check
  },
  cardList: {
    paddingBottom: 15
  }
});
