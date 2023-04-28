import React, {Suspense} from "react";
import Spin from "@/app/logos-icons/spin";
import AgentList from "@/app/agents/components/AgentList";
import AgentProvider from "@/app/agents/context/agentContext";
import AgentPopUp from "@/app/agents/components/agent_popup";

export default function AgentsPage() {
    return (
        <>
            {/*<Client/>*/}
            <Suspense fallback={<Spin/>}>
                <AgentProvider>
                    <AgentPopUp/>
                    {/*@ts-ignore*/}
                    <AgentList/>
                </AgentProvider>
            </Suspense>
        </>
    )
}