import { Box, BoxProps, SpaceProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends SpaceProps {
    bgColor?: BoxProps["bgColor"];
    color?: BoxProps["color"];
    alignSelf?: BoxProps["alignSelf"];
    borderRadius?: BoxProps["borderRadius"];
    sx?: BoxProps["sx"];
    children?: ReactNode;
}

function MessageBox({ children, bgColor, color, borderRadius, ...props }: Props) {
    return (
        <Box
            bgColor={bgColor || "primary"}
            borderRadius={borderRadius || "32px"}
            color={color || "dark.200"}
            maxW="16em"
            wordBreak="break-word"
            py="8px"
            px="20px"
            {...props}
        >
            {children}
        </Box>
    );
}

export default MessageBox;
