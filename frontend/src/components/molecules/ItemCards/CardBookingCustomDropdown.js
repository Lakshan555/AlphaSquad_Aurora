import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import TextBody from '../../atoms/texts/TextBody';
import dl from '../../../assets/images/booking/iconFrom.png'


const CustomDropdown = ({ options, onSelect,path,vectorImg,selectOption,title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    let imageSrc;

    if (title === 'From') {
        imageSrc = require('../../../assets/images/booking/iconFrom.png')
    } else if (title === 'To') {
        imageSrc = require('../../../assets/images/booking/iconTo.png')
    } else if (title === 'Ship') {
        imageSrc = require('../../../assets/images/booking/iconShip.png')
    } else if (title === 'Class') {
        imageSrc = require('../../../assets/images/booking/iconClass.png')
    }
    else if (title === 'Departure' || title === 'Return') {
      imageSrc = require('../../../assets/images/booking/datevector.png')
  }
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
        setIsOpen(false);
        onSelect(option); 
        console.log('option: ', selectedOption)
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
                <View style={styles.iconContainer}>
                    <Image source={imageSrc} style={styles.icon}></Image>
                </View>
                <View style={styles.textContainer}>
                    <TextBody value={`${title}`} fontSize={14}></TextBody>
                    <Text style={styles.selectedOptionText}>
                        {selectedOption ? selectedOption : `Select an ${selectOption}`}
                    </Text>
                </View>
        </TouchableOpacity>
  
        {isOpen && (
          <View style={styles.dropdownOptions}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleOptionSelect(option)}
                style={styles.option}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
    },
      dropdownButton: {
        position: 'relative',
        width: 340, 
        height: 65,
          marginBottom: 20,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      borderWidth: 0.5,
      borderColor: 'gray',
      overflow: 'hidden',
        // backgroundColor: 'linear-gradient(138deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.00) 100%)',
      backgroundColor: 'linear-gradient(146deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.00) 100%)',
        paddingHorizontal: 20,
      },
      iconContainer: {
          paddingVertical: 10,
        //   position: 'absolute',
    },
      icon: {
          minWidth: 30,
          maxWidth: 30,
          maxHeight: 40,
          resizeMode: 'contain'
      },
      textContainer: {
          display: 'flex',
          flexDirection: 'column',
          textAlignVertical: 'center',
          paddingVertical: 0,
          paddingTop: 11,
          marginLeft: 20,
    },
    selectedOptionText: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
        // fontFamily: 'Jost'
        // fontWeight: 600,
    },
    dropdownOptions: {
      position: 'absolute',
      top: 40,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      borderRadius: 5,
      elevation: 3, // For shadow
      zIndex: 1,
    },
    option: {
      padding: 12,
      borderBottomWidth: 1,
      borderBottomColor: 'lightgray',
    },
  });
  
  export default CustomDropdown;
  