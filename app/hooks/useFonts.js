import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    "Lato-Black": require("../assets/fonts/Lato-Black.ttf"),
    "Lato-Regular": require("../assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("../assets/fonts/Lato-Bold.ttf"),
  });
