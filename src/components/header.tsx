import {Card, CardContent, CardHeader, CardTitle} from "@/src/components/ui/card";
import Link from "next/link";
import {buttonVariants} from "@/src/components/ui/button";

export function Header(){
    return (
        <div>
            <Card className={"p-4 mb-4 bg-black text-white"}>
                <CardHeader>
                    <CardTitle className={"text-center font-bold text-4xl"}>
                        Bloc-notes
                    </CardTitle>
                </CardHeader>
            </Card>
            <Card className={"p-4 mb-4"}>
                <CardContent className={"flex flex-col  gap-2"}>
                    <Link className={buttonVariants({size: "lg", variant: "outline"})} href="/">Accueil</Link>
                    <Link className={buttonVariants({size: "lg", variant: "outline"})} href="/note/new">New</Link>
                </CardContent>
            </Card>
        </div>
    );
}