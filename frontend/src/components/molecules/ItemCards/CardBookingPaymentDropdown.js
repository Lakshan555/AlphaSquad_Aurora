import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import TextBody from "../../atoms/texts/TextBody";
import dl from "../../../assets/images/booking/iconFrom.png";

const CardBookingPaymentDropdown = ({
  options,
  onSelect,
  path,
  vectorImg,
  selectOption,
  title,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  let imageSrc;

  if (title === "PayPal") {
    imageSrc = require("../../../assets/images/booking/paypal.png");
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
    console.log("option: ", selectedOption);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
        <View style={styles.iconContainer}>
          <Image source={imageSrc} style={styles.icon}></Image>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.selectedOptionText}>
            {selectedOption ? selectedOption : `Select`}
          </Text>
        </View>
        <View style={styles.connectedText}>
          <TextBody
            value={`Connected`}
            fontSize={14}
            fontWeight={700}
          ></TextBody>
        </View>
        <View style={styles.dropDown}>
          <Image
            source={require("../../../assets/images/booking/dropDown.png")}
          ></Image>
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
  container: {},
  dropdownButton: {
    position: "relative",
    width: 340,
    height: 65,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    overflow: "hidden",
    // backgroundColor: 'linear-gradient(138deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.00) 100%)',
    backgroundColor:
      "linear-gradient(146deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.00) 100%)",
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
    resizeMode: "contain",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    textAlignVertical: "center",
    paddingVertical: 0,
    paddingTop: 22,
    marginLeft: 20,
  },
  selectedOptionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    // fontFamily: 'Jost'
    // fontWeight: 600,
  },
  dropdownOptions: {
    position: "absolute",
    top: 40,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 3, // For shadow
    zIndex: 1,
  },
  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  connectedText: {
    paddingLeft: 100,
  },
  dropDown: {
    paddingLeft: 10,
  },
});

export default CardBookingPaymentDropdown;
