import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import TextBody from '../../atoms/texts/TextBody';


const CustomDropdown = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
  
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
                    <Image source={require('../../../assets/images/booking/fromIcon.png')} style={styles.icon}></Image>
                </View>
                <View style={styles.textContainer}>
                    <TextBody value={'From'} fontSize={14}></TextBody>
                    <Text style={styles.selectedOptionText}>
                        {selectedOption ? selectedOption : 'Select an option'}
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
        position: 'relative',
        width: 320, 
        height: 65,
        marginBottom: 20
    },
    dropdownButton: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 18,
      borderWidth: 0.5,
      borderColor: 'gray',
      overflow: 'hidden',
        // backgroundColor: 'linear-gradient(138deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.00) 100%)',
      backgroundColor: 'linear-gradient(146deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.00) 100%)',
      paddingHorizontal: 20,
      },
      iconContainer: {
          paddingVertical: 10,
          paddingRight: 20,
    },
    icon: {
      },
      textContainer: {
          display: 'flex',
          flexDirection: 'column',
          textAlignVertical: 'center',
          paddingVertical: 10,
          paddingTop: 13,
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
  