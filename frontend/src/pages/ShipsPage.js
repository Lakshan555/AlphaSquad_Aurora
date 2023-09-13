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
      cost: '$ 3900.00',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/d258/19cf/fc14e1628c22b14dbab31289862a8dfe?Expires=1695600000&Signature=NlNtANxFk9sVwXDDOUg8LCZRqU7eRJ-QoE4E4Oy-cXTsvhSOe4ORTnLRj4~AgDMq3VDF9fgi57ipq8ly8PmTBrCEZ9bn8G04zF5GijCXTbocDJFVkRCaLNaGuYFB1S7xZGJFCL4bTRLZT99gNLqhIcfk0NyECQC29hj~RdL~tNQnL2cHeja1NOjWDkmogLW14k4jqbMyCJdHmbWTZXjFFwwSNc-bVuGpOOh2NzOnFN5Jd1IoG1zCVdT9g0T2xZjouPFpF~TosCDFO2cybupTwzzsHRJdLKajwiSyBpBdyVH9TOHchopFmL43eXi8yD~xNAU9TWpBpy2GkwnP2p5txw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      id: 2,
      name: 'Federation',
      shipTypes: ['type1', 'type2', 'type3'],
      cost: '$ 5000.00',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/7bad/6a10/0392500f18801957e3a27e7645ba5ed4?Expires=1695600000&Signature=VWpYjE2rt2GD~TLDZZbphOUfgT4Kv2pUHiW9Z~dUjo5nunc6DkWN3z4AK8XpavZIhdBJ785Qy8JJk9omfdRipmWzHaFMSZJPQtXaaMEiuN8RwAv96kTLIV0AxYpdsMTJQvNM4Xw-i2McrQjYZQBQfBFF6bUAL83POgbAsDUdKHDwXWv6xjHtmXKySpDLopJhTmjBknYZfV0vX7Aro6oqLDJiVvFWlCV08P4prRhaASbUBf7sJZrEJYTnLbdl2le5HwJCMHj7WvItgnSVl5e98~CQ4jlUQGutVgfV-wHydFwdNjjY7zU13REXdPI6GaQJ1XBzrVZ~k-gsjno3v3Ao8A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
        id: 3,
        name: 'Community Ship',
      shipTypes: ['type1', 'type2', 'type3'],
      cost: '$ 3900.00',
        imageSrc: 'https://s3-alpha-sig.figma.com/img/bbab/5ced/a97dbd661df7b956b37ce251f933c2e7?Expires=1695600000&Signature=ShKlP0LQjCQQuA0Q5oWxFm-otQGSX6zklNCrXzDhZXL6EWxDtAwY1huLcSz2TZ1yj-mo6iGS7IVu4n5K2pjKc8wUI7zIVAmE9PSPW8LgjmmJyJp1qQ3166viMs3-KcjlxuueskxnxtFOeZCAlqfcEmPy3trqQMvjUgWtOfjL-B7jsSLKtw9sKxCW~nzpR6sLu1a7MsTEmk0STGb74svyFqSHKe3EiW3KRe4FDdJF~bltNhZMktMixhHS8n5R~4aMFGSvQqAODCeDjLN9ZfIEuhq-LhuzpfCjFaXqgBU6Z4e5-jrXBi5OwQCUPCR9HnqVIjKZgZ0P7BuJDMPldJrXYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
