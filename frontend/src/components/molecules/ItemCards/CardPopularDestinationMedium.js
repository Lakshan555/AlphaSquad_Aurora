import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import TextHeading from '../../atoms/texts/TextHeading';
import TextBody from '../../atoms/texts/TextBody';

const CardPopularDestinationMedium = ({ name, cost, imageSrc }) => {
  return (
    <ImageBackground source={{uri: imageSrc}} style={styles.card} imageStyle={{width: 213, minHeight: 296, maxHeight: 296, marginRight: 28, borderRadius: 22, resizeMode: 'cover'}}>
          <View style={styles.cardContent}>
            <TextHeading
                value={name}
                textAlign={"center"}
                      lineHeight={34}
                      fontWeight={700}
                  fontSize={26}
                  marginBottom={0}
                  opacity={0.9}
              ></TextHeading>
            <TextBody
                value={cost}
                textAlign={"center"}
                fontSize={14}
                      fontWeight={500}
                  lineHeight={21}
                  opacity={0.9}
              ></TextBody>
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 213,
    minHeight: 296,
    maxHeight: 296,
    marginRight: 28,
    borderRadius: 22,
    resizeMode: 'cover',
  },
    cardContent: {
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingTop: 220,
    },
});

export default CardPopularDestinationMedium;
