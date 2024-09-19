import * as React from 'react';
import { theme } from '../../theme';
import { StyleSheet, Text, View, } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { ACCESSIBILITY_MAXIMUM_FONT_SIZE_SCALE } from '../../constants';
import { Ripple } from '../Ripple/Ripple';

const normalStyles = StyleSheet.create({
  buttonStyle: {
    height: moderateScale(30),
    width: moderateScale(90),
    borderRadius: moderateScale(100),
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainerStyle: {
    flexDirection: "row",
    alignItems: "center"
  },
  textStyle: {
    color: theme.colors.onPrimary
  },
  iconStyle: {
    paddingRight: moderateScale(20)
  }
});

const inverseStyles = StyleSheet.create({
  buttonStyle: {
    height: moderateScale(40),
    width: moderateScale(100),
    borderRadius: moderateScale(100),
    borderWidth: 1,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.onPrimary,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainerStyle: {
    flexDirection: "row",
    alignItems: "center"
  },
  textStyle: {
    color: theme.colors.primary
  },
  iconStyle: {
    paddingRight: moderateScale(20)
  },
});

interface curvedButtonType {
  title: string,
  inverse?: boolean,
  disableButton?: boolean,
  buttonStyle?: any,
  textStyle?: any,
  iconStyle?: any,
  events?: string,
  onPress?: () => any,
  onLongPress?: () => void,
  Icon?: any,
  light?: boolean,
  regular?: boolean,
  medium?: boolean,
  bold?: boolean,
  xs?: boolean,
  s?: boolean,
  m?: boolean,
  l?: boolean,
  xl?: boolean,
  xxl?: boolean,
  componentName?: string,
  resolver?: ({ userRole }: { userRole: string }) => string,
  testID?: string,
  accessibilityLabel?: string,
  allowFontScaling?: boolean
};
export const CurvedButton = ({
  title,
  inverse,
  disableButton,
  buttonStyle,
  textStyle,
  iconStyle,
  events,
  onPress = () => {

  },
  onLongPress = () => {
  },
  Icon,
  light,
  regular,
  medium,
  bold,
  xs,
  s,
  m,
  l,
  xl,
  xxl,
  componentName,
  resolver,
  testID,
  accessibilityLabel,
  allowFontScaling = true
}: curvedButtonType) => {
  // Default style

  const styles = inverse ? inverseStyles : normalStyles;
  const newStyle = {
    fontSize: theme.font.fontSizes.l,
    fontFamily: theme.font.fontFamily.medium
  };

  // Set font Style
  light && (newStyle.fontFamily = theme.font.fontFamily.light);
  regular && (newStyle.fontFamily = theme.font.fontFamily.regular);
  medium && (newStyle.fontFamily = theme.font.fontFamily.medium);
  bold && (newStyle.fontFamily = theme.font.fontFamily.bold);

  // Easily Set Font Sizes
  xs && (newStyle.fontSize = theme.font.fontSizes.xs);
  s && (newStyle.fontSize = theme.font.fontSizes.s);
  m && (newStyle.fontSize = theme.font.fontSizes.m);
  l && (newStyle.fontSize = theme.font.fontSizes.l);
  xl && (newStyle.fontSize = theme.font.fontSizes.xl);
  xxl && (newStyle.fontSize = theme.font.fontSizes.xxl);

  const disableButtonStyle = disableButton === true ? { opacity: 0.35 } : {};

  return (
    <Ripple
      rippleContainerBorderRadius={{ ...styles.buttonStyle, ...buttonStyle }.borderRadius}
      disabled={disableButton}
      style={{ ...styles.buttonStyle, ...buttonStyle, ...disableButtonStyle }}
      onPress={() => {
        if (!disableButton) {
          onPress();
        }

      }}
      onLongPress={() => {
        if (!disableButton) {
          onLongPress();
        }
      }}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
    >
      <View
        style={styles.buttonContainerStyle}
      >
        {Icon &&
          <View style={{ ...styles.iconStyle, ...iconStyle }}>
            {Icon}
          </View>
        }
        <Text maxFontSizeMultiplier={ACCESSIBILITY_MAXIMUM_FONT_SIZE_SCALE} style={{ ...styles.textStyle, ...newStyle, ...textStyle }} allowFontScaling={allowFontScaling}>{title}</Text>
      </View>
    </Ripple>
  );
};
