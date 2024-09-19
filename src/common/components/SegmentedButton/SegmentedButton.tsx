import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SegmentedButtons as PaperSegmentedButtons } from 'react-native-paper';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    container: {
        width: moderateScale(100)
    }
});

type ButtonProps = {
    value: string;
    icon?: any;
    disabled?: boolean;
    onPress?: () => void;
    label?: string;
    showSelectedCheck?: boolean;
    style?: any
    labelStyle?: any
    testID?: string;
}

type SegmentedButtonProps = {
    selectedButton: string,
    buttons: ButtonProps[],
    density?: 'regular' | 'small' | 'medium' | 'high',
    onChange: (_: string) => void,
    style?: any,
    testID?: string
};

export const SegmentedButton = ({ selectedButton, buttons = [], onChange = () => { }, density = "regular", style }: SegmentedButtonProps) => {
    return (
        <PaperSegmentedButtons
            value={selectedButton}
            onValueChange={onChange}
            buttons={buttons}
            style={[styles.container, style]}
            density={density} />
    );
};
