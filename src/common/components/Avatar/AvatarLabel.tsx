import * as React from 'react';
import { Avatar, AvatarTextProps, useTheme } from 'react-native-paper';
import { theme } from '../../theme';

interface AvatarLabelProps extends AvatarTextProps {
    // Label Style
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
};


export const AvatarLabel = (props: AvatarLabelProps) => {

    const mTheme = useTheme()

    // Default style
    const labelStyle: any = {
        fontSize: theme.font.fontSizes.l,
        color: mTheme.colors.onPrimary,
        fontFamily: theme.font.fontFamily.medium
    };

    // Assign Font Colors based on type.
    props.white && (labelStyle.color = mTheme.colors.onTertiary);
    props.secondary && (labelStyle.color = mTheme.colors.onSecondary);
    props.primary && (labelStyle.color = mTheme.colors.onPrimary);
    props.color && (labelStyle.color = props.color);

    // Set font Style
    props.light && (labelStyle.fontFamily = theme.font.fontFamily.light);
    props.regular && (labelStyle.fontFamily = theme.font.fontFamily.regular);
    props.medium && (labelStyle.fontFamily = theme.font.fontFamily.medium);
    props.semibold && (labelStyle.fontFamily = theme.font.fontFamily.semibold);
    props.bold && (labelStyle.fontFamily = theme.font.fontFamily.bold);

    // Easily Set Font Sizes
    props.xs && (labelStyle.fontSize = theme.font.fontSizes.xs);
    props.s && (labelStyle.fontSize = theme.font.fontSizes.s);
    props.m && (labelStyle.fontSize = theme.font.fontSizes.m);
    props.l && (labelStyle.fontSize = theme.font.fontSizes.l);
    props.xl && (labelStyle.fontSize = theme.font.fontSizes.xl);
    props.xl20 && (labelStyle.fontSize = theme.font.fontSizes.xl20);
    props.xl22 && (labelStyle.fontSize = theme.font.fontSizes.xl22);
    props.xxl && (labelStyle.fontSize = theme.font.fontSizes.xxl);
    props.xxxl && (labelStyle.fontSize = theme.font.fontSizes.xxxl);
    props.xxxl34 && (labelStyle.fontSize = theme.font.fontSizes.xxxl34);
    props.xxxxl && (labelStyle.fontSize = theme.font.fontSizes.xxxxl);
    props.xl5 && (labelStyle.fontSize = theme.font.fontSizes.xl5);

    return (
        <Avatar.Text label={props.label} size={props.size} labelStyle={[labelStyle, props.labelStyle]} style={props.style} />
    )
}