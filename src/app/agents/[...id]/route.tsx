import {redirect} from "next/navigation";

export async function GET(request: Request, {params}: {
    params: { id: string }
}) {
    redirect(`/agents?id=${params.id}`)
}