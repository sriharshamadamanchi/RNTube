import * as React from 'react';
import { Text } from 'react-native';
import { theme } from '../../theme';
import { ACCESSIBILITY_MAXIMUM_FONT_SIZE_SCALE } from '../../constants';
import { useTheme } from 'react-native-paper';

interface labelPopsType {
  title: string,
  center?: boolean,
  right?: boolean,
  white?: boolean,
  secondary?: boolean,
  primary?: boolean,
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
  xl20?: boolean,
  xl22?: boolean,
  xxl?: boolean,
  xxxl?: boolean,
  xxxl34?: boolean,
  xxxxl?: boolean,
  xl5?: boolean,
  style?: any,
  ellipsizeMode?: string,
  numberOfLines?: number,
  testID?: string,
  accessibilityLabel?: string,
  allowFontScaling?: boolean

};
export const Label = ({
  title,
  center,
  right,
  white,
  secondary,
  primary,
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
  xl20,
  xl22,
  xxl,
  xxxl,
  xxxl34,
  xxxxl,
  xl5,
  style,
  ellipsizeMode,
  numberOfLines = 1,
  testID,
  accessibilityLabel,
  allowFontScaling = true
}: labelPopsType) => {

  const mTheme = useTheme()

  // Default style
  const newStyle: any = {
    fontSize: theme.font.fontSizes.l,
    color: mTheme.colors.primary,
    fontFamily: theme.font.fontFamily.medium
  };

  // Assign Font Colors based on type.
  white && (newStyle.color = mTheme.colors.onTertiary);
  secondary && (newStyle.color = mTheme.colors.secondary);
  primary && (newStyle.color = mTheme.colors.primary);

  // Align Self
  center && (newStyle.alignSelf = newStyle.textAlign = 'center');
  right && (newStyle.textAlign = 'right');

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
  xl20 && (newStyle.fontSize = theme.font.fontSizes.xl20);
  xl22 && (newStyle.fontSize = theme.font.fontSizes.xl22);
  xxl && (newStyle.fontSize = theme.font.fontSizes.xxl);
  xxxl && (newStyle.fontSize = theme.font.fontSizes.xxxl);
  xxxl34 && (newStyle.fontSize = theme.font.fontSizes.xxxl34);
  xxxxl && (newStyle.fontSize = theme.font.fontSizes.xxxxl);
  xl5 && (newStyle.fontSize = theme.font.fontSizes.xl5);

  return (
    <Text testID={testID} accessibilityLabel={accessibilityLabel} maxFontSizeMultiplier={ACCESSIBILITY_MAXIMUM_FONT_SIZE_SCALE} numberOfLines={(ellipsizeMode === undefined) ? undefined : numberOfLines} style={{ ...newStyle, ...style }} allowFontScaling={allowFontScaling}>
      {title}
    </Text>
  );
};
