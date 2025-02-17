import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, Animated, View } from "react-native";

interface ButtonProps {
  title: string;
  onPress?: () => void;
}

const AnimatedButton: React.FC<ButtonProps> = ({ title, onPress }) => {
  const [animation] = useState(new Animated.Value(1)); // Pour l'effet d'animation

  const handlePressIn = () => {
    Animated.timing(animation, {
      toValue: 0, // Annule l'animation
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0.95, 1], // Effet de réduction au clic
        }),
      },
    ],
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={styles.button}
    >
      <Animated.View style={[styles.backgroundEffect, animatedStyle]} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "relative",
    overflow: "hidden",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#6200ea",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    color: "#6200ea",
  },
  backgroundEffect: {
    position: "absolute",
    width: "200%",
    height: "200%",
    backgroundColor: "rgba(98, 0, 234, 0.25)",
    borderRadius: 100,
    top: -50,
    left: -50,
  },
});

export default AnimatedButton;