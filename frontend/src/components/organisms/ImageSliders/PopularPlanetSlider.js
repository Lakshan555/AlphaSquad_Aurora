// ImageSlider.js
import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import CardPopularDestinationMedium from '../../molecules/ItemCards/CardPopularDestinationMedium';

const PopularPlanetSlider = ({ data }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.sliderContainer}
    >
      {data.map((item, index) => (
        <CardPopularDestinationMedium key={index} imageSrc={item.imageSrc} name={item.name} cost={ item.cost} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default PopularPlanetSlider;
