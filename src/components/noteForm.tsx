"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/src/components/ui/card";
import {Label} from "@/src/components/ui/label";
import {Input} from "@/src/components/ui/input";
import {Textarea} from "@/src/components/ui/textarea";
import {Button} from "@/src/components/ui/button";
import {updateNoteAction} from "@/app/note.action";
import Form from "next/form";
import {useFormStatus} from "react-dom";
import {redirect} from "next/navigation";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export function NoteForm({note}){
    const updateNote = async (formData: FormData) => {
        await updateNoteAction(note.id, {
            title: String(formData.get("title")),
            content: String(formData.get("content")),
        })
        redirect("/");
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
                    await updateNote(formData)
                }} formMethod="POST">
                    <Label className={"m-2"}>
                        Titre
                    </Label>
                    <Input name="title" className={"m-2"} defaultValue={note.title}/>
                    <Label className={"m-2"}>
                        Contenu
                    </Label>
                    <Textarea name="content" className={"m-2 h-100"} defaultValue={note.content}/>
                    <SubmitButton/>
                </Form>
            </CardContent>
        </Card>
    );
}

const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <Button disabled={pending} type="submit" className={"m-2 w-full"}>
            {pending ? "Mise à jour en cours" : "Mettre à jour"}
        </Button>
    )
}