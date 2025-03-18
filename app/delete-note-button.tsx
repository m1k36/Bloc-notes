"use client";

import {Button, buttonVariants} from "@/src/components/ui/button";
import {deleteNoteAction} from "@/app/note.action";
import {useState} from "react";
import {useRouter} from "next/navigation";

export function DeleteCitationButton(props: {id: number}) {
    const [isConfirm, setIsConfirm] = useState(false);
    const router = useRouter();

    const onDelete = async () => {
        const result = await deleteNoteAction(props.id);
        if(result.message){
            router.refresh();
        }
    };

    return (
        <Button
            onClick={() => {
                if (isConfirm) {
                    onDelete();
                } else {
                    setIsConfirm(true);
                    setTimeout(() => setIsConfirm(false), 5000);
                }
            }}
            className={buttonVariants({size: "lg", variant: isConfirm ? "destructive" : "outline"})}
        >
            {isConfirm ? "Connfirmer ?" : "🗑️"}
        </Button>
    );
}