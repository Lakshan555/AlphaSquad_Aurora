import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import TextHeading from '../atoms/texts/TextHeading';

export default Popup = ({ visible, onClose }) => {
    return (
        <Modal
          animationType="fade"
          transparent={true}
          visible={visible}
          onRequestClose={onClose}
        >
          <TouchableWithoutFeedback onPress={onClose}>
            <View style={styles.overlay}>
              {/* <ImageBackground
                source={require('../../assets/images/popup-bg.png')} // Replace with your image source
                style={styles.popup}
              > */}
                {/* Your content here */}
                    <View style={styles.popup}>
                    <TextHeading value={'Activate Distress Beacon'} lineHeight={39} fontWeight={600} fontSize={22} textAlign={'center'}></TextHeading>
                <TouchableOpacity style={styles.activateButton}>
                  <TextHeading value={'Activate'} lineHeight={39} fontWeight={600} fontSize={22} textAlign={'center'}></TextHeading>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deactivateButton}>
                  <TextHeading value={'Deactivate'} lineHeight={39} fontWeight={600} fontSize={22} color={'black'} textAlign={'center'}></TextHeading>
                </TouchableOpacity>
                </View>
              {/* </ImageBackground> */}
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      );
    };

    const styles = StyleSheet.create({
        overlay: {
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          justifyContent: 'center',
            alignItems: 'center',
        },
        popup: {
            width: 350,
            height: 370, // Set the height according to your image aspect ratio
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 44,
            borderWidth: 2, // Use borderWidth instead of border
            borderColor: 'gray',
            overflow: 'hidden', // Clip the content to the border radius
            backgroundColor: 'linear-gradient(138deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.00) 100%)', // Use backgroundColor instead of background
        },
        activateButton: {
          backgroundColor: '#B00',
          padding: 10,
          borderRadius: 20,
            marginTop: 55,
          width: 210,
        },
        deactivateButton: {
            width: 207,
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 20,
          marginTop: 20,
        },
      });
      
  
