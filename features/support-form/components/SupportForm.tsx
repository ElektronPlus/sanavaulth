import React from "react";
import { Button } from "components/Button";
import { Dialog } from "components/Dialog";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";

export function SupportForm() {
  return (
    <Dialog title="Potrzebujesz pomocy?" description="Odpiszemy w ciągu 24 godzin" button={<button className="absolute bottom-4 right-4">Potrzebuję pomocy</button>}>
      <form className="grid gap-5">
        <Input type="text" name="imie" placeholder="Zuzanna" label="Imię" />
        <Input
          type="text"
          name="nazwisko"
          placeholder="Grabowska"
          label="Nazwisko"
        />
        <Input
          type="email"
          name="email"
          placeholder="kontakt@sanah.pl"
          label="E-mail"
        />
        <TextArea
          name="text"
          label={"Treść zgłoszenia"}
          cols={30}
          rows={10}
          placeholder="No sorry, ale mam problem z..."
          className="mt-2 rounded py-1 px-1"
        />
        <Button type="submit">Wyślij</Button>
      </form>
    </Dialog>
  );
}
