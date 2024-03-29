import { Stack, StackProps } from "@chakra-ui/react";
import type { Message } from "../types/message";
import MessageBox from "./common/MessageBox";

interface Props extends StackProps {
    messages: Array<Message>;
    colors: {
        container: string;
        senderMessage: string;
        senderText: string;
    };
    user: string;
}

function MessageDisplay({ messages, user, colors, ...props }: Props) {
    return (
        <Stack direction="column" align="flex-end" justify="flex-end" bgColor={colors.container} {...props}>
            {messages.map(({ message, name }, i) =>
                user === name ? (
                    <MessageBox key={name + i.toString()}>{message}</MessageBox>
                ) : (
                    <MessageBox
                        key={name + i.toString()}
                        bgColor={colors.senderMessage}
                        color={colors.senderText}
                        alignSelf="flex-start"
                    >
                        {message}
                    </MessageBox>
                )
            )}
        </Stack>
    );
}

export default MessageDisplay;
