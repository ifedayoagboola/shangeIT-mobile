import React from "react";
import { TouchableOpacity, Text, Linking, StyleSheet } from "react-native";

interface LinkProps {
  url: string;
  text: string;
  className?: string;
}

const Link: React.FC<LinkProps> = ({ url, text, className }) => {
  const handlePress = () => {
    // Open the URL in the default browser
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.button}
      className={className}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: "lightblue",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Link;
