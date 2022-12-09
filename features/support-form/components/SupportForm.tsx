import React, { useState } from "react";
import { Button } from "components/Button";
import { Dialog } from "components/Dialog";
import Input from "components/Input";
import TextArea from "components/TextArea";
import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import { useMessageStore } from "../hooks/useMessageStore";
import { MessageInput } from "../mutations/CreateMessage.generated";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export function SupportForm() {
    const { t } = useTranslation("common");
    const { createMessage } = useMessageStore();

    const { register, handleSubmit, reset } = useForm<MessageInput>();

    const [isModalOpen, setModalOpen] = useState(false);
    const [isCaptchaOpen, setCaptchaOpen] = useState(false);
    const [token, setToken] = useState<string | null>(null);
    const [error, setError] = useState("");

    const onMessageCreate = async (formData: MessageInput) => {
        if (!token) return setError("Please complete the captcha");

        const { data, errors } = await createMessage(formData, token);
        if (errors) return setError("Something went wrong");
        if (data?.createMessage) {
            setCaptchaOpen(false);
            setModalOpen(false);
            reset();
        }
    };

    const onError = (err: string) => {
        setError(err);
    };

    const onExpire = () => {
        setError("Kod captcha wygasł. Spróbuj ponownie.");
    };

    return (
        <Dialog
            title={t("supportForm.title")}
            description={t("supportForm.description")}
            button={
                <button className="absolute bottom-4 right-4">
                    {t("supportForm.help")}
                </button>
            }
            open={isModalOpen}
            setOpen={setModalOpen}
            isCaptchaOpen={isCaptchaOpen}
        >
            <form
                className="grid gap-5"
                onSubmit={handleSubmit(onMessageCreate)}
            >
                <Input
                    type="text"
                    {...register("name")}
                    placeholder={t("supportForm.namePlaceholder")}
                    label={t("name")}
                />
                <Input
                    type="text"
                    {...register("surname")}
                    placeholder={t("supportForm.surnamePlaceholder")}
                    label={t("surname")}
                />
                <Input
                    type="email"
                    {...register("email")}
                    placeholder={t("supportForm.emailPlaceholder")}
                    label={t("email")}
                />
                <TextArea
                    {...register("content")}
                    label={t("supportForm.request")}
                    cols={30}
                    rows={10}
                    placeholder={t("supportForm.textPlaceholder")}
                    className="mt-2 rounded py-1 px-1"
                />
                <HCaptcha
                    sitekey={`${process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}`}
                    onOpen={() => setCaptchaOpen(true)}
                    onClose={() => setCaptchaOpen(false)}
                    onVerify={setToken}
                    onError={onError}
                    onExpire={onExpire}
                    tabIndex={100}
                />
                <Button type="submit">{t("submit")}</Button>
            </form>
        </Dialog>
    );
}
