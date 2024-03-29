import axios from "axios";
import {Agent as agentType} from "@/app/types/agent";
import Agent from "@/app/agents/components/agent";
import Spin from "@/app/logos-icons/spin";
import {Suspense} from "react";
import AgentWrapper from "@/app/agents/components/agent_wrapper";
import {redirect} from "next/navigation";
import {shuffle} from "@/app/hooks/getShuffledArray";
import Link from "next/link";

export function sleep(ms = 2000): Promise<void> {
    console.log('Kindly remember to remove `sleep`');
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function AgentList() {

    const agents: agentType[] = await axios.get('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
        .then(res => {
            // return sleep(1000).then(() => {
            return shuffle(res.data.data)
            // })
        })
        .catch(() => {
            redirect('/agents')
        });

    const componentType = typeof window === 'undefined' ? 'server' : 'client';
    console.log(componentType)

    return (
        <div className={"p-4 text-center"}>
            <h1 className={"text-4xl p-8"}>Agents</h1>
            <Suspense fallback={<div className={"flex items-center justify-center"}><Spin/></div>}>
                {agents ?
                    (<div
                        className={"grid xl:grid-cols-3 md:grid-cols-2 2xl:grid-cols-5 4xl:grid-cols-6 5xl:grid-cols-7 gap-6"}>
                        {agents.map(agent => (
                            <Link href={`/agents/${agent.uuid}`} key={agent.uuid}>
                                <div className={"hover:scale-105 transition delay-300 duration-700"} key={agent.uuid}>
                                    <AgentWrapper key={agent.uuid} agent_id={agent.uuid}>
                                        <Suspense fallback={<Spin/>}>
                                            {/*@ts-ignore*/}
                                            <Agent agent={agent} key={agent.uuid}/>
                                        </Suspense>
                                    </AgentWrapper>
                                </div>
                            </Link>
                        ))}
                    </div>) : <div className={"flex items-center justify-center"}><Spin/></div>}
            </Suspense>
        </div>
    )
}