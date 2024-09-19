import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { ProgressBar as PaperProgressBar } from 'react-native-paper';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    container: {
        width: moderateScale(150),
        height: moderateScale(5),
        borderRadius: moderateScale(5)
    },
    fillStyle: {
        borderRadius: moderateScale(5)
    }
});

type ProgressBarProps = {
    progress: number,
    style?: any,
    fillStyle?: any,
    indeterminate?: boolean,
    testID?: string
};

export const ProgressBar = ({ progress, indeterminate = false, style, fillStyle, testID }: ProgressBarProps) => {
    return (
        <PaperProgressBar
            style={[styles.container, style]}
            progress={progress}
            indeterminate={indeterminate}
            fillStyle={[styles.fillStyle, fillStyle]}
            testID={testID} />
    );
};
