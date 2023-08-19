import React, { useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import PlanetDetailIconPalette from '../PlanetDetailIconPalette';
import TextHeading from '../../atoms/texts/TextHeading';
import TextBody from '../../atoms/texts/TextBody';

const CardPopularDestinationLarge = ({ data, onPress }) => {

  // useEffect = () => {
  //   console.log('\n\ndataa::', data)
  // },[]

  function getFirstSentence(paragraph) {
    // Find the index of the first dot (full stop)
    const firstDotIndex = paragraph.indexOf('.');
  
    // Check if a dot was found
    if (firstDotIndex !== -1) {
      // Use the index to split the paragraph and get the first sentence
      const firstSentence = paragraph.substring(0, firstDotIndex + 1);
      return firstSentence;
    } else {
      // If no dot is found, return the entire paragraph
      return paragraph;
    }
  }
  
  return (
    <TouchableOpacity onPress={onPress}>
          <ImageBackground source={{uri: data.imageSrc}} style={styles.card}>
          <View style={styles.cardContent}{...styles.overlay }>
        <View style={styles.textContainer}>
            <TextHeading
                value={data.name}
                textAlign={"left"}
              lineHeight={36}
              ></TextHeading>
            <TextBody
                value={getFirstSentence(data.details)}
                textAlign={"justify"}
                fontSize={14}
              fontWeight={400}
              lineHeight={18}
              marginBottom={15}
              ></TextBody>
        </View>
        <PlanetDetailIconPalette rating={data.rating} temp={data.temperature} duration={data.duration}></PlanetDetailIconPalette>
      </View>
    </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 200,
    // marginHorizontal: 15,
    marginBottom: 18,
    resizeMode: 'cover',
    borderRadius: 22,
        overflow: 'hidden',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 25,
        // paddingVertical: '7%',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  textContainer: {
      marginTop: 42,
        display: 'flex',
        flexDirection: 'column',
        // marginBottom: -21
  },
});

export default CardPopularDestinationLarge;
