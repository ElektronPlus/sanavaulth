import React from "react";
import { Button } from "components/Button";
import { Dialog } from "components/Dialog";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";
import { useTranslation } from "next-i18next";

export function SupportForm() {
    const { t } = useTranslation('common')

    return (
        <Dialog title={t("supportForm.title")} description={t("supportForm.description")} button={<button className="absolute bottom-4 right-4">{t("supportForm.help")}</button>}>
        <form className="grid gap-5">
            <Input
            type="text"
            name="firstName"
            placeholder={t("supportForm.namePlaceholder")}
            label={t("name")}
            />
            <Input
            type="text"
            name="surName"
            placeholder={t("supportForm.surnamePlaceholder")}
            label={t("surname")}
            />
            <Input
            type="email"
            name="email"
            placeholder={t("supportForm.emailPlaceholder")}
            label={t("email")}
            />
            <TextArea
            name="text"
            label={t("supportForm.request")}
            cols={30}
            rows={10}
            placeholder={t("supportForm.textPlaceholder")}
            className="mt-2 rounded py-1 px-1 resize-none"
            />
            <Button type="submit">{t("submit")}</Button>
        </form>
        </Dialog>
    );
}
