import * as React from 'react';
import { Button, Banner as PaperBaner, useTheme } from 'react-native-paper';
import { $RemoveChildren } from 'react-native-paper/lib/typescript/types';

type BannerProps = {
    visible: boolean,
    renderBanner: () => React.ReactNode,
    actions?: Array<{ label: string; } & $RemoveChildren<typeof Button>>,
    icon?: any,
    contentStyle?: any,
    style?: any
}

export const Banner = ({ visible, actions, contentStyle = {}, renderBanner, ...rest }: BannerProps) => {

    const mTheme = useTheme()

    return (
        <PaperBaner
            contentStyle={[contentStyle, { backgroundColor: mTheme.colors.onPrimary }]}
            visible={visible}
            actions={actions}
            {...rest}>
            {renderBanner()}
        </PaperBaner>
    );
}