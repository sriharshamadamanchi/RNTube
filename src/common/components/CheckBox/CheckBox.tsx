import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Checkbox as PaperCheckbox, useTheme } from 'react-native-paper';

const styles = StyleSheet.create({
  containerStyle: {
    transform: [{ scale: 1.2 }]
  }
});

type CheckBoxProps = {
  checked?: boolean,
  disabled?: boolean,
  onPress?: (_: boolean) => void,
  containerStyle?: any,
  testID?: string
};

export const CheckBox = ({ disabled, checked, onPress = () => { }, containerStyle = {}, testID }: CheckBoxProps) => {

  const mTheme = useTheme()

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <PaperCheckbox.Android
        status={checked ? 'checked' : 'unchecked'}
        disabled={disabled}
        onPress={() => onPress(!checked)}
        uncheckedColor={mTheme.colors.primary}
        testID={testID}
      />
    </View>
  );
};
