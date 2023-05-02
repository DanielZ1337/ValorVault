import React from "react";
import AgentList from "@/app/agents/components/AgentList";
import AgentProvider from "@/app/agents/context/agentContext";
import AgentPopUp from "@/app/agents/components/agent_popup";

export default function AgentsPage() {
    return (
        <>
            {/*<Client/>*/}
            <AgentProvider>
                <AgentPopUp/>
                {/*@ts-ignore*/}
                <AgentList/>
            </AgentProvider>
        </>
    )
}