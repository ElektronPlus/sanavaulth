import { Button } from "components/Button";
import { Dialog } from "components/Dialog";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";
import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import { useMessageStore } from "../hooks/useMessageStore";
import { MessageInput } from "../mutations/CreateMessage.generated";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useState } from "react";

export const SupportForm = () => {
  const [captcha, setCaptcha] = useState<string | null>(null);

  const { t } = useTranslation("common");
  const { register, handleSubmit} = useForm<MessageInput>();
  const { createMessage } = useMessageStore();

  const onSubmit = async (data: MessageInput) => {
    const { errors } = await createMessage(
      data,
      "10000000-aaaa-bbbb-cccc-000000000001"
    );
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
    >
      <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)}>
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
          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ?? ""}
          onVerify={(token, ekey) => setCaptcha(token)}
        />
        <Button type="submit">{t("submit")}</Button>
      </form>
    </Dialog>
  );
};
