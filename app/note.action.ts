"use server";

import {prisma} from "@/src/lib/prisma";
import {redirect} from "next/navigation"

export async function createNoteAction(note: {
    title: string,
    content: string,
}) {
    console.log("DATABASE_URL en production :", process.env.DATABASE_URL);
    try {
        await prisma.note.create({
            data: {
                title: note.title,
                content: note.content,
            },
        });
    } catch {
        return {
            error: "Error while creating the note."
        }
    }
    redirect("/");
}

export async function deleteNoteAction(id: number) {
    await prisma.note.delete({
        where: {
            id,
        },
    });
    return {
        message: "Note deleted."
    }
}

export async function updateNoteAction(id: number, note: {
    title: string,
    content: string,
}) {
    await prisma.note.update({
        where:{
            id,
        },
        data: {
            title: note.title,
            content: note.content,
        }
    });
    return {
        message: "Note updated."
    }
}

export async function selectNoteAction(id: number) {
    const note = await prisma.note.findFirst({
        where: {
            id,
        }
    });
    return note;
}

export async function selectManyNoteAction() {
    const notes = await prisma.note.findMany({
        orderBy:{
            createAt: "desc"
        }
    });
    return notes;
}