import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import Colors from '../config/colors';

function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={Colors.dark}
        style={[styles.inputtext]}

        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 5,

  },
  inputtext: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.normgrey,
    width: '100%',
    height: 50,
    paddingLeft: 10,

    color: Colors.dark,
  },
  placeh: {
    color: Colors.dark,
  },
  icon: {
    marginRight: 10,
    paddingTop: 15,
  },
});

export default AppTextInput;
