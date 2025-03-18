export const dynamic = "force-dynamic";

import {selectNoteAction} from "@/app/note.action"
import {redirect} from "next/navigation";
import {NoteForm} from "@/src/components/noteForm";

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
        <NoteForm note={note}></NoteForm>
    );
}