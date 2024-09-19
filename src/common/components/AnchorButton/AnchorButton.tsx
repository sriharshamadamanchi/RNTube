import React from 'react';
import { theme } from '../../theme';
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';
import { ACCESSIBILITY_MAXIMUM_FONT_SIZE_SCALE } from '../../constants';

const styles = StyleSheet.create({
  buttonStyle: {
  },
  textStyle: {
    color: theme.colors.primary
  },
  underLineStyle: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primary
  }
});
interface anchorButtonType {
  title: string,
  underline?: boolean,
  buttonStyle?: any,
  textStyle?: any,
  underLineStyleProp?: any,
  events?: string,
  onPress?: () => any,
  light?: boolean,
  regular?: boolean,
  medium?: boolean,
  semibold?: boolean,
  bold?: boolean,
  xs?: boolean,
  s?: boolean,
  m?: boolean,
  l?: boolean,
  xl?: boolean,
  xxl?: boolean,
  testID?: string,
  disabled?: boolean,
  accessibilityLabel?: string
};

export const AnchorButton = ({
  title,
  underline = true,
  buttonStyle,
  textStyle,
  underLineStyleProp,
  onPress = () => {
  },
  light,
  regular,
  medium,
  semibold,
  bold,
  xs,
  s,
  m,
  l,
  xl,
  xxl,
  testID,
  disabled,
  accessibilityLabel
}: anchorButtonType): any => {
  // Default style

  const newStyle = {
    fontSize: theme.font.fontSizes.l,
    fontFamily: theme.font.fontFamily.medium
  };

  // Set font Style
  light && (newStyle.fontFamily = theme.font.fontFamily.light);
  regular && (newStyle.fontFamily = theme.font.fontFamily.regular);
  medium && (newStyle.fontFamily = theme.font.fontFamily.medium);
  semibold && (newStyle.fontFamily = theme.font.fontFamily.semibold);
  bold && (newStyle.fontFamily = theme.font.fontFamily.bold);

  // Easily Set Font Sizes
  xs && (newStyle.fontSize = theme.font.fontSizes.xs);
  s && (newStyle.fontSize = theme.font.fontSizes.s);
  m && (newStyle.fontSize = theme.font.fontSizes.m);
  l && (newStyle.fontSize = theme.font.fontSizes.l);
  xl && (newStyle.fontSize = theme.font.fontSizes.xl);
  xxl && (newStyle.fontSize = theme.font.fontSizes.xxl);

  const underLineStyle = underline === true ? { ...styles.underLineStyle, ...underLineStyleProp } : {};
  const disableButtonStyle = disabled === true ? { opacity: 0.35 } : {};

  return (
    <TouchableOpacity
      disabled={disabled}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      style={{ ...underLineStyle, ...styles.buttonStyle, ...buttonStyle, ...disableButtonStyle }}
      onPress={() => {
        onPress();
      }}
    >
      <Text maxFontSizeMultiplier={ACCESSIBILITY_MAXIMUM_FONT_SIZE_SCALE} style={{ ...styles.textStyle, ...newStyle, ...textStyle }} >{title}</Text>
    </TouchableOpacity>
  );
};
