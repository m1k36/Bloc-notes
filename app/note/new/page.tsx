"use client";

import {Card, CardTitle, CardHeader, CardContent} from "@/src/components/ui/card";
import {Label} from "@/src/components/ui/label";
import {Input} from "@/src/components/ui/input";
import {Textarea} from "@/src/components/ui/textarea";
import {Button} from "@/src/components/ui/button";
import {useFormStatus} from "react-dom";
import Form from "next/form";
import {createNoteAction} from "@/app/note.action";

export default function Page() {
    const createNote = async (formData: FormData) => {
        await createNoteAction({
            title: String(formData.get("title")),
            content: String(formData.get("content")),
        })
    };
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Nouvelle note :
                </CardTitle>
            </CardHeader>
            <CardContent className={"flex flex-col gap-4"}>
                <Form action={async (formData) => {
                    await createNote(formData)
                }} formMethod="POST">
                    <Label className={"m-2"}>
                        Titre
                    </Label>
                    <Input name="title" className={"m-2"}/>
                    <Label className={"m-2"}>
                        Contenu
                    </Label>
                    <Textarea name="content" className={"m-2 h-100"}/>
                    <SubmitButton />
                </Form>
            </CardContent>
        </Card>
    );
}

const SubmitButton = () => {
    const {pending} = useFormStatus();

    return (
        <Button disabled={pending} type="submit" className={"m-2 w-full"}>
            {pending ? "Création en cours ..." : "Créer"}
        </Button>
    )
}