import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
 
    fontFamily: Platform.OS === "android" ? "notoserif" : "Avenir",
  
};