import { StyledButton } from './Button.styles';
import type { ButtonProps } from './Button.types';

/**
 * A styled MUI button component that accepts custom background color and text color.
 * @param props - Button component props
 * @param props.children - Child elements to render inside the button
 * @param props.bgColor - Custom background color (defaults to theme primary.main)
 * @returns A styled MUI button component
 */
export const Button = (props: ButtonProps) => {
    const { children, bgColor, ...rest } = props;

    return (
        <StyledButton bgColor={bgColor} {...rest}>
            {children && children}
        </StyledButton>
    );
};
