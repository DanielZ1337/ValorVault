'use client';

import {useAgentContext} from "@/app/agents/context/agentContext";
import React from "react";

export default function AgentWrapper({agent_id, children}: { agent_id: string, children: React.ReactNode }) {

    const {setAgentId, setAgentActive, agentActive, agentId} = useAgentContext();

    return (
        <button onClick={() => {
            setAgentId(agent_id);
            setAgentActive(true);
        }}>
            {children}
        </button>
    )
}