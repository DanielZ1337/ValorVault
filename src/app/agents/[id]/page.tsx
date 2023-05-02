import axios from "axios";
import {Agent} from "@/app/types/agent";

export const revalidate = 60


export async function generateStaticParams() {
    const agents: Agent[] = await axios.get("https://valorant-api.com/v1/agents").then(res => res.data.data)
    return agents.map((agent) => ({
        params: {
            id: agent.uuid
        }
    }))
}

export default function AgentPage({params}: { params: { id: string } }) {
    return (
        <h1>yes</h1>
    )
}