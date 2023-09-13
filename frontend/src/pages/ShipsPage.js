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
      shipTypes: ['Odyssey Shuttle', 'Starlight Commuter', 'CosmoScooter'],
      cost: '$ 3900.00',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/0716/8ac3/e5c72b26a1aff62254387cab45180be6?Expires=1695600000&Signature=iZSv~HtyKZnRYeYx4tSxJXU8kSOgqzRfbLY4F4hiYuVYSWyhKX1dtFJlkn~vufD8yvU0JKzxKUAeRErV9xm6YV9nNe9kvCQQD0yTtWnClcxYs2kcWhYmrhI3CIv2-4MprNLk-hZT3c8FX0XlMcGH3nORnUEACCI3HixWWVj4B-ubtFMFJMtvt4FPcEsKPHp0zqudxeIr2ObQrjTSrNJqATmSXeck7IRoqwI2BkdNanoL3bmpnesTwVgQkskoyQRi2z1VJ3OJ6y7FAK7WvcNT1EgX3tN2Sn8~L~HPOGqW~8svfv1QAa3m6c-Y4Kpbjae6f5RAjG1B5AGzT4qM7Wgh5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      id: 2,
      name: 'Federation',
      shipTypes: ['type1', 'type2', 'type3'],
      cost: '$ 5000.00',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/a857/9090/f21b07661ed5bd7a081fb95f425ff251?Expires=1695600000&Signature=Sd96knPcYCgOZU6-6ZPKwu31gePvgD1Ij736U3mFfq3IqRAxfnWaBm6lEoF2GubT0NhSNUiOiYKH7Z7aOsw5I14W4fIAcNb8MsxM5sIbZLm~C-Dv~7YW1VlA5ZOcDAPF6W0T4qcqbTCO~xvAAoGG7VGv7tMGRMbEa5EMOx8cjHXsjhucKwoqqzK0cNrtYqSZr5hmxoIle6tD0oi3X-ioHjNUqsAqYP-P8uxmIQEzx2zsEbTtWKEkG9MBakTKIaM9kWOWJ6QVneSSTP~C~UzsCjY95JHjZjmSsybYjL359Di3C~4~-Tu9rQIXOR8q8IR3VHMTX4iJ5vQkIAQln~vraQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
        id: 3,
        name: 'Community Ship',
      shipTypes: ['type1', 'type2', 'type3'],
      cost: '$ 3900.00',
        imageSrc: 'https://s3-alpha-sig.figma.com/img/23ef/d0ef/5a1a940ac37d584fa3c08c15a2c86ad4?Expires=1695600000&Signature=YMFWdWYJ4m24T47zHi11aiHrHUmCpm1M3i9XL8rSHcjZTnCJu7IVWquRnb6aoY8YxUMrfL-g~KHt1inGypRdbU4u9EEiNgqMP6qaUz9PCsq-lFg7wd6bb~4SqwAyWVMA2zRManE5F~2QAvJQn-PNVJFKB0S5UUySVxBr0g23OwNNmuT3~D4fthcNbBc31Fy91hzfkxm8xoIyBG02MweDmIVuINjp7Rdmxkj7yvfC-W4q4xsdyIr4tC6VoE4eNEnlRQhTR~FDoIMf34vva9htdpbxGnTvgXkyMb9DxDIZvYnYI0-c7IMfltxTEV9BEEn1LzWNlFcb2E2FntG39FT0IA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      },
      {
        id: 4,
        name: 'Federation',
        shipTypes: ['type1', 'type2', 'type3'],
      cost: '$ 3900.00',
        imageSrc: 'https://s3-alpha-sig.figma.com/img/7bad/6a10/0392500f18801957e3a27e7645ba5ed4?Expires=1695600000&Signature=VWpYjE2rt2GD~TLDZZbphOUfgT4Kv2pUHiW9Z~dUjo5nunc6DkWN3z4AK8XpavZIhdBJ785Qy8JJk9omfdRipmWzHaFMSZJPQtXaaMEiuN8RwAv96kTLIV0AxYpdsMTJQvNM4Xw-i2McrQjYZQBQfBFF6bUAL83POgbAsDUdKHDwXWv6xjHtmXKySpDLopJhTmjBknYZfV0vX7Aro6oqLDJiVvFWlCV08P4prRhaASbUBf7sJZrEJYTnLbdl2le5HwJCMHj7WvItgnSVl5e98~CQ4jlUQGutVgfV-wHydFwdNjjY7zU13REXdPI6GaQJ1XBzrVZ~k-gsjno3v3Ao8A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
            {/* <ScrollView> */}
                <View style={styles.listContainer}>
                  <FlatList
                      data={allShips}
                      keyExtractor={(item) => item.id.toString()}
                      renderItem={({ item }) => (
                        <CardShip
                          data={item}
                        />
                      )}
                      style={styles.cardList}
                    />
                </View>
              {/* </ScrollView> */}
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
      height: '17%',
  },
  topPart: {
    // paddingHorizontal: 22,      
  },
  secondPartContainer: {
      height: '83%',
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
      paddingBottom: 50,
  },
  cardList: {
    // padding: 15,
      // paddingBottom: 40
  }
});
