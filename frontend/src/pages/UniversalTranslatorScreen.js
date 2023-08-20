import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';
import BackgroundTemplate from "../components/templates/BackgroundTemplate";
import TextHeading from '../components/atoms/texts/TextHeading';
import { useState } from 'react';
import axios from 'axios';
import TextBody from '../components/atoms/texts/TextBody';

const TranslationScreen = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const translateText = async () => {
    try {
      const response = await axios.post(
        'https://api.cognitive.microsofttranslator.com/translate',
        [
          {
            text: inputText,
          },
        ],
        {
          params: {
            'api-version': '3.0',
            from: 'ja',
            to: 'en',
          },
          headers: {
              'Ocp-Apim-Subscription-Key': '32a5e7d4532e4a149088a88050401845', 
              'Ocp-Apim-Subscription-Region': 'eastus',
              'Content-Type': 'application/json',
          },
        }
      );

      const translation = response.data[0].translations[0].text;
      setTranslatedText(translation);
    } catch (error) {
      console.error('Translation error:', error);
    }
  };

  return (
    <BackgroundTemplate>
    <View style={styles.container}>
        <View style={styles.topPartContainer}>
            <View style={styles.topPart}>
                <View style={styles.appNameContainer}>
                    <Image source={require('../assets/images/appLogo.png')} style={{marginRight: 12, width: 22, height: 19}}></Image>
                    <TextHeading value={'Aurora'}></TextHeading>
            </View>
            <View style={styles.commonTitleContainer}>
                <TextHeading
                  value={"Universal Translator"}
                  fontSize={26}
                  lineHeight={39}
                  fontWeight={600}
                  textAlign={"center"}
                ></TextHeading>
              </View>
            </View> 
        </View>
        {/* from list onwards comes below */}
        <View style={styles.secondPartContainer}>
          <View style={styles.inputBox}>
            <TextInput
              placeholder="Enter text here"
              onChangeText={(text) => setInputText(text)}
              value={inputText}
              onSubmitEditing={translateText}
              style={{color: 'white', fontSize: 18}}
            />
          </View>
          <View style={styles.coverterBtnContainer}>
            <TouchableOpacity onPress={translateText} style={styles.translatorBtn}>
              <Image
                source={require("../assets/images/iconTranslator.png")}
                style={styles.translatorIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.outputText}>
              {translatedText !== '' && (
                <TextBody value={translatedText} fontSize={24} color={'white'} ></TextBody>
                )}
          </View>
        </View>
        
      </View>
</BackgroundTemplate>

  );
};

export default TranslationScreen;


const styles = StyleSheet.create({
  container: {
    paddingVertical: 45,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 30,
  },
  topPartContainer: {
  },
  topPart: {
    // backgroundColor: 'green'
  },
  appNameContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 30,
    alignItems: 'center'
  },
  commonTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlignVertical: 'center',
    marginBottom: 15,
    alignItems: 'center'
  },
  secondPartContainer: {
    // backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  translatorIcon: {
    width: 35,
    height: 35,
  },
  inputBox: {
    borderBottomColor: 'white',
    borderWidth: 0.5,
    color: 'white',
    backgroundColor: 'transparent'
  },
  coverterBtnContainer: {

  },
  outputText: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: 'orange',

  },
});
