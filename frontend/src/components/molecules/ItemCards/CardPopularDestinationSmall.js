import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import TextHeading from '../../atoms/texts/TextHeading';
import TextBody from '../../atoms/texts/TextBody';

const CardPopularDestinationSmall = ({ name, imageSrc, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <ImageBackground source={{uri: imageSrc}} style={styles.card} imageStyle={{width: 213, minHeight: 174, maxHeight: 174, marginRight: 28, borderRadius: 22, resizeMode: 'cover'}}>
          <View style={styles.cardContent}>
            <TextHeading
                value={name}
                textAlign={"center"}
                      lineHeight={25}
                      fontWeight={700}
                  fontSize={17}
                  marginBottom={0}
                  opacity={0.9}
              ></TextHeading>
        </View>
    </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 213,
    minHeight: 174,
    maxHeight: 174,
    marginRight: 28,
    borderRadius: 22,
    resizeMode: 'cover',
  },
    cardContent: {
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingTop: 120,
    },
});

export default CardPopularDestinationSmall;
