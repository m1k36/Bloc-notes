export const dynamic = "force-dynamic";

import {Card, CardContent, CardHeader, CardTitle} from "@/src/components/ui/card";
import Link from "next/link";
import {buttonVariants} from "@/src/components/ui/button";
import {selectNoteAction} from "@/app/note.action";
import {redirect} from "next/navigation";
import {DeleteCitationButton} from "@/app/delete-note-button";

export default async function Page(props: {
    params: Promise<{
        noteId: string;
    }>
}) {
    const params = await props.params;
    const note= await selectNoteAction(parseInt(params.noteId));
    if (note===null) {
        redirect("/");
    }
    return (
        <Card className={"h-full"}>
            <CardHeader><CardTitle>{note.title}</CardTitle></CardHeader>
            <CardContent className={"flex flex-col gap-4 h-full"}>
                <textarea className={"h-full"} value={note.content} readOnly={true}/>
                <p>
                    --- Date : 15/03/2025
                </p>
            </CardContent>
            <CardContent className={"flex flex-row gap-2"}>
                <DeleteCitationButton id={note.id}/>
                <Link className={buttonVariants({size: "lg", variant: "outline"})} href={"/note/"+note.id+"/edit"}>✏️</Link>
            </CardContent>
        </Card>
    );
}