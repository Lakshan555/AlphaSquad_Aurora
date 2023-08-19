// ImageSlider.js
import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import CardPopularDestinationSmall from '../../molecules/ItemCards/CardPopularDestinationSmall';

const PopularDestinationSlider = ({ data }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.sliderContainer}
    >
      {data.map((item, index) => (
        <CardPopularDestinationSmall key={index} imageSrc={item.imageSrc} name={item.name} />
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

export default PopularDestinationSlider;
