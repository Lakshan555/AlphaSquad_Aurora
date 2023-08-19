import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import PlanetDetailIconPalette from '../PlanetDetailIconPalette';
import TextHeading from '../../atoms/texts/TextHeading';
import TextBody from '../../atoms/texts/TextBody';

const CardShip = ({ name, shipTypes, imageSrc, onPress }) => {
    // let types = ['type 1', 'type2', 'type3']
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground source={{uri: imageSrc}} style={styles.card}>
        <View style={styles.cardContent}>
            <View style={styles.shipTypeContainer}>
                <TextHeading
                value={name}
                textAlign={"center"}
                      lineHeight={30}
                      fontSize={20}
                      fontWeight={600}
                      color={'black'}
              ></TextHeading>
            </View>
            {shipTypes.map((shipType, index) => (
              <TextBody
                value = {`${index+1}. ${shipType}`}
                key={index}
                textAlign={"center"}
                fontSize={14}
                    fontWeight={500}
                    lineHeight={21}
              ></TextBody>
            ))}
      </View>
    </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
        maxWidth: 325, //if this is given 100%, the shipPage width also will change according to the paddings given to this card
        minWidth: 325,
        height: 178,
        // marginHorizontal: 15,
        marginBottom: 20,
        resizeMode: 'cover',
        borderRadius: 30,
        overflow: 'hidden',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',

    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 50,
        paddingHorizontal: 70,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    shipTypeContainer: {
        backgroundColor: 'white',
        paddingVertical: 4,
        paddingHorizontal: 20,
        marginBottom: 10,
        borderRadius: 13,
        width: '100%'
    }
});

export default CardShip;
