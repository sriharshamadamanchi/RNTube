import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Switch as PaperSwitch } from 'react-native-paper';

const styles = StyleSheet.create({
  containerStyle: {
    transform: [{ scale: Platform.select({ android: 1.2, ios: 1 }) ?? 1 }]
  }
});

type SwitchProps = {
  checked?: boolean,
  disabled?: boolean,
  onChange?: (_: boolean) => void,
  containerStyle?: any,
  testID?: string
};

export const Switch = ({ checked, disabled, onChange = () => { }, containerStyle = {}, testID }: SwitchProps) => {

  return (
    <PaperSwitch
      value={checked}
      disabled={disabled}
      onValueChange={() => onChange(!checked)}
      style={[styles.containerStyle, containerStyle]}
      testID={testID}
    />
  );
};
