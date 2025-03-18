export const dynamic = "force-dynamic";

import {Card, CardTitle, CardHeader, CardContent} from "@/src/components/ui/card";
import {buttonVariants} from "@/src/components/ui/button";
import Link from 'next/link';
import {DeleteCitationButton} from "@/app/delete-note-button";
import {selectManyNoteAction} from "@/app/note.action";

export default async function Home() {
    const notes = await selectManyNoteAction();
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Liste des notes :
                </CardTitle>
            </CardHeader>
            <CardContent className={"flex flex-col gap-4"}>
                {notes.map(note => (
                    <Card className={"p-4"} key={note.id}>
                        <CardHeader><CardTitle>{note.title}</CardTitle></CardHeader>
                        <CardContent>
                            <p>
                                {trimmContent(note.content)}
                            </p>
                        </CardContent>
                        <CardContent>
                            --- {note.createAt.getDate()+"/"+note.createAt.getMonth()+"/"+note.createAt.getFullYear()+" : "+note.createAt.getHours()+"h"+note.createAt.getMinutes()}
                        </CardContent>
                        <CardContent className={"flex flex-row gap-2"}>
                            <DeleteCitationButton id={note.id}/>
                            <Link className={buttonVariants({size: "lg", variant: "outline"})} href={"/note/"+String(note.id)+"/edit"}>✏️</Link>
                            <Link className={buttonVariants({size: "lg", variant: "outline"})} href={"/note/"+String(note.id)}>👁️</Link>
                        </CardContent>
                    </Card>
                ))}
            </CardContent>
        </Card>
    );
}

function trimmContent(content: string): string {
    let trimmedContent: string = "";
    content.split(" ").map((word, index) => (
        trimmedContent += index > 25 ? "" : word+" "
    ))
    if(content.split(" ").length > 25){
        trimmedContent+="..."
    }
    return trimmedContent;
}