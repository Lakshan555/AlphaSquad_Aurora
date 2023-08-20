// TranslationScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        placeholder="Enter text in Japanese"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
        onSubmitEditing={translateText}
      />
      <Button title="Translate" onPress={translateText} />
      {translatedText !== '' && (
        <Text style={{ fontSize: 24 }}>{translatedText}</Text>
      )}
    </View>
  );
};

export default TranslationScreen;
