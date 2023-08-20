import { NavigationContainer } from "@react-navigation/native";
import Test1 from "./src/pages/test_page_1";
import Test2 from "./src/pages/test_page_2";
import Tabs from "./src/components/molecules/navigationBar/BottomAppBar";
import SelectedPlanetDetailsPage from "./src/pages/SelectedPlanetDetailsPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateNewBookingPage from "./src/pages/CreateNewBookingPage";
import CreateNewBookingSecondPage from "./src/pages/CreateNewBookingSecondPage";
import SelectedShipDetailsPage from "./src/pages/SelectedShipDetailsPage";
import TranslationScreen from "./src/pages/UniversalTranslatorScreen";
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="tabNavigator"
        options={{ headerShown: false }}
        component={Tabs}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        component={SelectedPlanetDetailsPage}
        name="SelectedPlanetDetailsPage"
      />
      <Stack.Screen
        options={{ headerShown: false }}
        component={SelectedShipDetailsPage}
        name="SelectedShipDetailsPage"
      />
      <Stack.Screen
        options={{ headerShown: false }}
        component={CreateNewBookingPage}
        name="CreateNewBookingPage"
      />
      <Stack.Screen
        options={{ headerShown: false }}
        component={CreateNewBookingSecondPage}
        name="CreateNewBookingSecondPage"
      />
      <Stack.Screen
        options={{ headerShown: false }}
        component={TranslationScreen}
        name="TranslationScreen"
      />
    </Stack.Navigator>
  );
};

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default function App() {
  return <RootNavigation />;
}
