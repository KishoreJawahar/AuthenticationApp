import React from "react";
import {TextField} from "react-native-material-textfield";
import {Text, View} from "react-native";
import styles from "../Components/AppModules/AuthModule/Styles/LoginStyles";

const TextInput = props => {
  const {
    placeholder,
    autoFocus = false,
    tintColor = "#63C156",
    onChangeText,
    value,
    keyboardType,
    maxLength,
    returnKeyType="default",
    autoCapitalize="none",
    error = "",
    errorText
  } = props;
  return (
    <View>
      <TextField
        {...props}
        placeholder={placeholder}
        autoFocus={autoFocus}
        tintColor={tintColor}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        returnKeyType={returnKeyType}
        value={value}
        error={error}
        autoCapitalize={autoCapitalize}
        maxLength={maxLength}
        style={{ fontSize: 16, color: "#333333" }}
      />
      {error ? <Text style={styles.errorTextStyle}>{errorText}</Text> : null}
    </View>
  );
};

export default TextInput;
