import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { RadioButton as PaperRadioButton, useTheme } from 'react-native-paper';

const styles = StyleSheet.create({
  containerStyle: {
    transform: [{ scale: 1.2 }]
  }
});

type RadioButtonProps = {
  value: string,
  checked?: string,
  disabled?: boolean,
  onPress?: () => void,
  containerStyle?: any,
  testID?: string
};

export const RadioButton = ({ value, disabled, checked, onPress = () => { }, containerStyle = {}, testID }: RadioButtonProps) => {

  const mTheme = useTheme()

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <PaperRadioButton.Android
        value={value}
        status={checked === value ? 'checked' : 'unchecked'}
        disabled={disabled}
        onPress={onPress}
        uncheckedColor={mTheme.colors.primary}
        testID={testID}
      />
    </View>
  );
};
