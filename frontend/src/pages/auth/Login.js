import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import LoginBackgroundTemplate from "../../components/templates/LoginBackgroundTemplate";
import TextHeading from "../../components/atoms/texts/TextHeading";
import TextBody from "../../components/atoms/texts/TextBody";
import { MaterialIcons } from "@expo/vector-icons";
import ButtonLogin from "../../components/atoms/buttons/ButtonLogin";
import { Foundation } from "@expo/vector-icons";
export default Login = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate("tabNavigator");
  };
  return (
    <LoginBackgroundTemplate>
      <View style={styles.logo}>
        <Image source={require("../../assets/images/login/Aurora.png")} />
      </View>
      <View style={styles.logoTitle}>
        <TextHeading
          value={"Space"}
          fontWeight={600}
          fontSize={45}
          lineHeight={50}
        />
        <TextBody
          value={"Exploration"}
          fontWeight={400}
          fontSize={45}
          lineHeight={50}
        />
      </View>
      <View style={styles.inputArea}></View>
      <View style={styles.input}>
        <MaterialIcons name="email" size={24} color="white" />
        <TextInput
          style={styles.inputInside}
          placeholder="Email"
          placeholderTextColor="white"
        />
      </View>
      <View style={styles.input}>
        <Foundation name="lock" size={24} color="white" />
        <TextInput
          secureTextEntry={true}
          style={styles.inputInside}
          placeholder="Password"
          placeholderTextColor="white"
        />
      </View>
      <View style={{ marginLeft: -20, marginTop: 5 }}>
        <ButtonLogin ButtonName={"Sign In"} onPress={onPress} />
      </View>
      <View style={styles.newAcc}>
        <TextBody value={"Don’t you have account?"} fontSize={14} />
        <TextBody
          value={"Create new account."}
          fontSize={14}
          fontWeight={500}
        />
      </View>
    </LoginBackgroundTemplate>
  );
};

const styles = StyleSheet.create({
  logo: {
    bottom: 20,
  },
  logoTitle: {
    right: 30,
    bottom: -90,
  },
  newAcc: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputArea: {
    paddingTop: 150,
  },
  input: {
    flexDirection: "row",
    backgroundColor:
      "linear-gradient(138deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.00) 100%)", // Use backgroundColor instead of background
    padding: 13,
    borderColor: 'gray',
    overflow: 'hidden', // Clip the content to the border radius
    width: 340,
    margin: 15,
    marginTop: 10,
    borderRadius: 4,
    shadowColor: "#000",
    color: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 0,
  },
  inputInside: {
    color: "white",
    paddingLeft: 10,
  },
});
