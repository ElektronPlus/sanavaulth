import { MessageInput, useCreateMessageMutation } from "../mutations/CreateMessage.generated";

export function useMessageStore() {
    const [create, {loading: loadingCreate}] = useCreateMessageMutation();
    return {
        createMessage(message: MessageInput, captcha: string) {
            return create({
                variables: {
                    message,
                    captcha
                }
            });
        },
        loading: loadingCreate
    }
}
