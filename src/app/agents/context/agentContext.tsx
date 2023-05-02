'use client';

import React, {createContext, useContext, useState} from "react";

interface IAgentContext {
    agentId: string | null,
    setAgentId: (agentId: string | null) => void,
    agentActive: boolean,
    setAgentActive: (agentActive: boolean) => void
}

const AgentContext = createContext<IAgentContext>({
    agentId: null,
    setAgentId: () => {},
    agentActive: false,
    setAgentActive: () => {}
});

const AgentProvider = ({children}: { children: React.ReactNode }) => {
    const [agentId, setAgentId] = useState<string | null>(null);
    const [agentActive, setAgentActive] = useState<boolean>(false);

    return (
        <AgentContext.Provider value={{agentId, setAgentId, agentActive, setAgentActive}}>
            {children}
        </AgentContext.Provider>
    )
}

export const useAgentContext = () => useContext(AgentContext); // useAgentContext is a custom hook

export default AgentProvider;