import React from "react";
import { Button } from "components/Button";
import { Dialog } from "components/Dialog";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";
import { useTranslation } from "next-i18next";

export function SupportForm() {

    // Define file name (without .json). Then use t("name")
    const { t } = useTranslation('support-form')

    return (
        <Dialog title={t("title")} description={t("description")} button={<button className="absolute bottom-4 right-4">Potrzebuję pomocy</button>}>
        <form className="grid gap-5">
            <Input
            type="text"
            name="imie"
            placeholder="Zuzanna"
            label={t("name")}
            />
            <Input
            type="text"
            name="nazwisko"
            placeholder="Grabowska"
            label={t("surname")}
            />
            <Input
            type="email"
            name="email"
            placeholder="kontakt@sanah.pl"
            label={t("email")}
            />
            <TextArea
            name="text"
            label={"Treść zgłoszenia"}
            cols={30}
            rows={10}
            placeholder={t("text-placeholder")}
            className="mt-2 rounded py-1 px-1"
            />
            <Button type="submit">{t("submit")}</Button>
        </form>
        </Dialog>
    );
}
